// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.4;
//
import "./F0ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract ArchetypeBackup is Initializable, ERC721Upgradeable, OwnableUpgradeable {
  /**********************************************************
   *
   *   EVENTS
   *
   **********************************************************/
  event Invited(bytes32 indexed key, bytes32 indexed cid);
  event NSUpdated(string name, string symbol);
  event Configured(Config config);
  event WithdrawerUpdated(Withdrawer withdrawer);

  /**********************************************************
   *
   *   DATA STRUCTURES
   *
   **********************************************************/
  struct Config {
    string placeholder;
    string base;
    uint64 supply;
    bool permanent;
  }
  struct Invite {
    uint128 price;
    uint64 start;
    uint64 limit;
  }
  struct Auth {
    bytes32 key;
    bytes32[] proof;
  }
  struct Withdrawer {
    address account;
    bool permanent;
  }
  struct Invitelist {
    bytes32 key;
    bytes32 cid;
    Invite invite;
  }

  /**********************************************************
   *
   *  VARIABLES
   *
   **********************************************************/
  mapping(bytes32 => Invite) public invite;
  Config public config;
  Withdrawer public withdrawer;
  uint256 public nextId;
  uint256 private feeUsed;
  string public URI;
  address public royalty;
  mapping(address => mapping(bytes32 => uint256)) private minted;

  /**********************************************************
   *
   *  INITIALIZER
   *
   **********************************************************/
  function initialize(
    string memory name,
    string memory symbol,
    Config calldata _config
  ) external initializer {
    __ERC721_init(name, symbol);
    __Ownable_init();
    setConfig(_config);
  }

  /**********************************************************
   *
   *  ADMIN
   *
   **********************************************************/
  function setConfig(Config calldata _config) public onlyOwner {
    require(!config.permanent, "1");
    config = _config;
    emit Configured(_config);
  }

  function setNS(string calldata name_, string calldata symbol_) external onlyOwner {
    require(!config.permanent, "2");
    _name = name_;
    _symbol = symbol_;
    emit NSUpdated(_name, _symbol);
  }

  function setURI(string calldata _uri) external onlyOwner {
    URI = _uri;
  }

  function setWithdrawer(Withdrawer calldata _withdrawer) external onlyOwner {
    require(!withdrawer.permanent, "3");
    withdrawer = _withdrawer;
    emit WithdrawerUpdated(_withdrawer);
  }

  function setInvites(Invitelist[] calldata invitelist) external onlyOwner {
    if (nextId == 0) nextId = 1; // delay nextId setting until the first invite is made.
    for (uint256 i = 0; i < invitelist.length; i++) {
      Invitelist calldata list = invitelist[i];
      invite[list.key] = list.invite;
      emit Invited(list.key, list.cid);
    }
  }

  function setInvite(
    bytes32 _key,
    bytes32 _cid,
    Invite calldata _invite
  ) external onlyOwner {
    if (nextId == 0) nextId = 1; // delay nextId setting until the first invite is made.
    invite[_key] = _invite;
    emit Invited(_key, _cid);
  }

  function withdraw() external payable {
    /****************************************************************************************************
     *
     *  Authorization
     *   - Either the owner or the withdrawer (in case it's set) can initiate withdraw()
     *
     ****************************************************************************************************/
    require(_msgSender() == owner() || _msgSender() == withdrawer.account, "4");

    /****************************************************************************************************
     *
     *  Fee => 1% of revenue with 1ETH cap
     *   - compute 1%
     *   - if paying 1% exceeds the 1ETH total fee used, only pay enough to reach 1ETH
     *   - update the total fee used
     *
     ****************************************************************************************************/
    uint256 balance = address(this).balance;
    uint256 fee = 0;
    if (feeUsed < 1 ether) {
      fee = balance / 100;
      if (feeUsed + fee > 1 ether) fee = 1 ether - feeUsed;
      feeUsed += fee;
    }

    /****************************************************************************************************
     *
     *   - if the withdrawer.account is not set (0x0 address), withdraw balance-fee to owner
     *   - if the withdrawer.account is set, withdraw balance-fee to withdrawer.account
     *
     ****************************************************************************************************/
    (bool sent1, ) = payable(withdrawer.account == address(0) ? owner() : withdrawer.account).call{
      value: balance - fee
    }("");
    require(sent1, "5");

    /****************************************************************************************************
     *
     *   - the fee is sent to 0x502b2FE7Cc3488fcfF2E16158615AF87b4Ab5C41
     *
     ****************************************************************************************************/
    (bool sent2, ) = payable(address(0x502b2FE7Cc3488fcfF2E16158615AF87b4Ab5C41)).call{
      value: fee
    }("");
    require(sent2, "6");
  }

  /**********************************************************
   *
   *  TOKEN
   *
   **********************************************************/
  function mint(Auth calldata auth, uint256 _count) external payable {
    uint256 n = nextId;
    Invite memory i = invite[auth.key];
    require(verify(auth, _msgSender()), "7");
    require(i.price * _count == msg.value, "8");
    require(i.start <= block.timestamp, "9");
    require(minted[_msgSender()][auth.key] + _count <= i.limit, "10");
    require(n + _count - 1 <= config.supply, "11");

    for (uint256 k = 0; k < _count; k++) {
      _safeMint(_msgSender(), n + k);
    }
    nextId = n + _count;
    minted[_msgSender()][auth.key] += _count;
  }

  // function mint(Auth calldata auth, uint256 _count) external payable {
  //   uint256 n = nextId;
  //   Invite memory i = invite[auth.key];
  //   require(verify(auth, _msgSender()), "7");
  //   require(i.price * _count == msg.value, "8");
  //   require(i.start <= block.timestamp, "9");
  //   require(minted[_msgSender()][auth.key] + _count <= i.limit, "10");
  //   require(n + _count - 1 <= config.supply, "11");
  //   for (uint256 k = 0; k < _count; k++) {
  //     _safeMint(_msgSender(), n + k);
  //   }
  //   nextId = n + _count;
  //   minted[_msgSender()][auth.key] += _count;
  // }

  function gift(address _receiver, uint256 _count) external onlyOwner {
    // first time: nextId is 0 => n is 1
    // after that: nextId is 1 or greater => n is the same as nextId
    uint256 n = (nextId > 0 ? nextId : 1);
    require(_count > 0, "12");
    require(n + _count - 1 <= config.supply, "13");
    for (uint256 k = 0; k < _count; k++) {
      _safeMint(_receiver, n + k);
    }
    nextId = n + _count;
  }

  function burn(uint256 _tokenId) external {
    require(_isApprovedOrOwner(_msgSender(), _tokenId), "14");
    _burn(_tokenId);
  }

  function tokenURI(uint256 tokenId)
    public
    view
    override(ERC721Upgradeable)
    returns (string memory)
  {
    require(tokenId > 0 && tokenId <= config.supply, "15");
    if (bytes(config.base).length > 0) {
      return string(abi.encodePacked(config.base, _toString(tokenId), ".json"));
    } else {
      return
        bytes(config.placeholder).length > 0
          ? config.placeholder
          : "ipfs://bafkreieqcdphcfojcd2vslsxrhzrjqr6cxjlyuekpghzehfexi5c3w55eq";
    }
  }

  /**********************************************************
   *
   *  ROYALTY
   *
   **********************************************************/
  function setRoyalty(address _address) external onlyOwner {
    require(!config.permanent, "16");
    royalty = _address;
  }

  function royaltyInfo(uint256 tokenId, uint256 value)
    external
    view
    returns (address receiver, uint256 royaltyAmount)
  {
    if (royalty == address(0)) {
      // Default: No royalty
      return (royalty, 0);
    } else {
      // If the royalty address is set, call the contract to get the royalty values
      (, bytes memory r) = royalty.staticcall(
        abi.encodeWithSignature("get(address,uint256,uint256)", address(this), tokenId, value)
      );
      return abi.decode(r, (address, uint256));
    }
  }

  function supportsInterface(bytes4 interfaceId)
    public
    view
    virtual
    override(ERC721Upgradeable)
    returns (bool)
  {
    return (interfaceId == 0x2a55205a || super.supportsInterface(interfaceId));
  }

  /**********************************************************
   *
   *  UTIL
   *
   **********************************************************/
  function _toString(uint256 value) internal pure returns (string memory) {
    uint256 temp = value;
    uint256 digits;
    while (temp != 0) {
      digits++;
      temp /= 10;
    }
    bytes memory buffer = new bytes(digits);
    while (value != 0) {
      digits--;
      buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
      value /= 10;
    }
    return string(buffer);
  }

  function verify(Auth calldata auth, address account) internal pure returns (bool) {
    if (auth.key == "") return true;
    bytes32 computedHash = keccak256(abi.encodePacked(account));
    for (uint256 i = 0; i < auth.proof.length; i++) {
      bytes32 proofElement = auth.proof[i];
      if (computedHash <= proofElement) {
        computedHash = keccak256(abi.encodePacked(computedHash, proofElement));
      } else {
        computedHash = keccak256(abi.encodePacked(proofElement, computedHash));
      }
    }
    return computedHash == auth.key;
  }
}
