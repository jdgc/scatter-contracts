/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "IERC721MetadataUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721MetadataUpgradeable__factory>;
    getContractFactory(
      name: "IERC721ReceiverUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721ReceiverUpgradeable__factory>;
    getContractFactory(
      name: "IERC721Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Upgradeable__factory>;
    getContractFactory(
      name: "ERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165Upgradeable__factory>;
    getContractFactory(
      name: "IERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165Upgradeable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Archetype",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Archetype__factory>;
    getContractFactory(
      name: "ArchetypeBackup",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ArchetypeBackup__factory>;
    getContractFactory(
      name: "ERC721AOwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721AOwnableUpgradeable__factory>;
    getContractFactory(
      name: "ERC721AUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721AUpgradeable__factory>;
    getContractFactory(
      name: "ERC721AIERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721AIERC721Receiver__factory>;
    getContractFactory(
      name: "ERC721A",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721A__factory>;
    getContractFactory(
      name: "ERC721AQueryable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721AQueryable__factory>;
    getContractFactory(
      name: "F0",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.F0__factory>;
    getContractFactory(
      name: "ERC721Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Upgradeable__factory>;
    getContractFactory(
      name: "Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Factory__factory>;
    getContractFactory(
      name: "HelloWorld",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HelloWorld__factory>;
    getContractFactory(
      name: "IERC721A",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721A__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Remilia",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Remilia__factory>;
    getContractFactory(
      name: "ERC721AIERC721ReceiverUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721AIERC721ReceiverUpgradeable__factory>;
    getContractFactory(
      name: "ERC721AUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721AUpgradeable__factory>;
    getContractFactory(
      name: "IERC721AUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721AUpgradeable__factory>;
    getContractFactory(
      name: "LibString",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LibString__factory>;

    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "IERC721MetadataUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721MetadataUpgradeable>;
    getContractAt(
      name: "IERC721ReceiverUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721ReceiverUpgradeable>;
    getContractAt(
      name: "IERC721Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Upgradeable>;
    getContractAt(
      name: "ERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165Upgradeable>;
    getContractAt(
      name: "IERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165Upgradeable>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Archetype",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Archetype>;
    getContractAt(
      name: "ArchetypeBackup",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ArchetypeBackup>;
    getContractAt(
      name: "ERC721AOwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721AOwnableUpgradeable>;
    getContractAt(
      name: "ERC721AUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721AUpgradeable>;
    getContractAt(
      name: "ERC721AIERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721AIERC721Receiver>;
    getContractAt(
      name: "ERC721A",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721A>;
    getContractAt(
      name: "ERC721AQueryable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721AQueryable>;
    getContractAt(
      name: "F0",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.F0>;
    getContractAt(
      name: "ERC721Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Upgradeable>;
    getContractAt(
      name: "Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Factory>;
    getContractAt(
      name: "HelloWorld",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HelloWorld>;
    getContractAt(
      name: "IERC721A",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721A>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Remilia",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Remilia>;
    getContractAt(
      name: "ERC721AIERC721ReceiverUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721AIERC721ReceiverUpgradeable>;
    getContractAt(
      name: "ERC721AUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721AUpgradeable>;
    getContractAt(
      name: "IERC721AUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721AUpgradeable>;
    getContractAt(
      name: "LibString",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LibString>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
