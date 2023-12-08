/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace ICampaign {
  export type CampaignsInfoStruct = {
    name: string;
    description: string;
    baseURI: string;
    timeStart: BigNumberish;
    timeEnd: BigNumberish;
    expireClaim: BigNumberish;
    nftId: BigNumberish[];
  };

  export type CampaignsInfoStructOutput = [
    name: string,
    description: string,
    baseURI: string,
    timeStart: bigint,
    timeEnd: bigint,
    expireClaim: bigint,
    nftId: bigint[]
  ] & {
    name: string;
    description: string;
    baseURI: string;
    timeStart: bigint;
    timeEnd: bigint;
    expireClaim: bigint;
    nftId: bigint[];
  };
}

export interface ICampaignInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addNftToCampaign"
      | "createCampaign"
      | "getAllCampaign"
      | "getCampaignByPeriod"
      | "getCampaignInfo"
      | "hasCampaignRunning"
      | "isRunningCampaign"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addNftToCampaign",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createCampaign",
    values: [string, string, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllCampaign",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCampaignByPeriod",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCampaignInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hasCampaignRunning",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isRunningCampaign",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addNftToCampaign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createCampaign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllCampaign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCampaignByPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCampaignInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasCampaignRunning",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isRunningCampaign",
    data: BytesLike
  ): Result;
}

export interface ICampaign extends BaseContract {
  connect(runner?: ContractRunner | null): ICampaign;
  waitForDeployment(): Promise<this>;

  interface: ICampaignInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addNftToCampaign: TypedContractMethod<
    [_campaignId: BigNumberish, _nftId: BigNumberish],
    [void],
    "nonpayable"
  >;

  createCampaign: TypedContractMethod<
    [
      _name: string,
      _description: string,
      _baseURI: string,
      _timeStart: BigNumberish,
      _timeEnd: BigNumberish,
      _expireClaim: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getAllCampaign: TypedContractMethod<[], [bigint[]], "view">;

  getCampaignByPeriod: TypedContractMethod<
    [period: string],
    [bigint[]],
    "view"
  >;

  getCampaignInfo: TypedContractMethod<
    [_campaignId: BigNumberish],
    [ICampaign.CampaignsInfoStructOutput],
    "view"
  >;

  hasCampaignRunning: TypedContractMethod<
    [_timeStart: BigNumberish, _timeEnd: BigNumberish],
    [boolean],
    "view"
  >;

  isRunningCampaign: TypedContractMethod<
    [_campaignId: BigNumberish],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addNftToCampaign"
  ): TypedContractMethod<
    [_campaignId: BigNumberish, _nftId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createCampaign"
  ): TypedContractMethod<
    [
      _name: string,
      _description: string,
      _baseURI: string,
      _timeStart: BigNumberish,
      _timeEnd: BigNumberish,
      _expireClaim: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getAllCampaign"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getCampaignByPeriod"
  ): TypedContractMethod<[period: string], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getCampaignInfo"
  ): TypedContractMethod<
    [_campaignId: BigNumberish],
    [ICampaign.CampaignsInfoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "hasCampaignRunning"
  ): TypedContractMethod<
    [_timeStart: BigNumberish, _timeEnd: BigNumberish],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isRunningCampaign"
  ): TypedContractMethod<[_campaignId: BigNumberish], [boolean], "view">;

  filters: {};
}
