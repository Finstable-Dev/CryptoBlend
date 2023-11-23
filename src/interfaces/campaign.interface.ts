export interface IDetailCampaign {
  id: number;
  name: string;
  description: string;
  baseURI: string;
  timeStart: bigint;
  timeEnd: bigint;
  nftId: readonly bigint[];
}

export interface IMetadata {
  name: string;
  description: string;
  image: string;
  attributes: {
    "trait-type": string;
    value: string | number;
  }[];
}
