/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LibOrderDataV2,
  LibOrderDataV2Interface,
} from "../LibOrderDataV2";

const _abi = [
  {
    inputs: [],
    name: "V2",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c1610025600b82828239805160001a60731461001857fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c806396cd25ef146038575b600080fd5b603e6052565b604051604991906076565b60405180910390f35b7f23d235efaf569b2b407d10f447247743508d1762a8e3a3aed85ccc0570dde35f81565b6001600160e01b03199190911681526020019056fea2646970667358221220f64c89660d77e54a3279aa12ce1d37f51aeb6976eb27f8294737fd5a18a424eb64736f6c63430007060033";

export class LibOrderDataV2__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LibOrderDataV2> {
    return super.deploy(overrides || {}) as Promise<LibOrderDataV2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LibOrderDataV2 {
    return super.attach(address) as LibOrderDataV2;
  }
  connect(signer: Signer): LibOrderDataV2__factory {
    return super.connect(signer) as LibOrderDataV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibOrderDataV2Interface {
    return new utils.Interface(_abi) as LibOrderDataV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibOrderDataV2 {
    return new Contract(address, _abi, signerOrProvider) as LibOrderDataV2;
  }
}