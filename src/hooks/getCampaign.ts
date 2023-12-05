import { addressList } from "@/constants/addressList";
import { IDetailCampaign, IMetadata } from "@/interfaces/campaign.interface";
import readMetadataService from "@/services/readMetadata.service";
import { Campaign__factory, CryptoCoffPoint__factory } from "@/typechain-types";
import { useEffect, useMemo, useState } from "react";
import { useAccount, useContractRead, useContractReads } from "wagmi";

export function useGetAllCampaigns() {
  const { data } = useContractRead({
    address: addressList.Campaign,
    abi: Campaign__factory.abi,
    functionName: "getAllCampaign",
  });

  const campaigns = useMemo(() => {
    if (!data) return [];

    return data.map((d: BigInt) => Number(d));
  }, [data]);

  return { campaigns };
}

export function GetrunningCampaing() {
  const { campaigns } = useGetAllCampaigns()
  const [campaignId, setCampaignId] = useState<number | undefined>(undefined)
  const contract = {
    address: addressList.Campaign,
    abi: Campaign__factory.abi,
    functionName: "isRunningCampaign",
  }
  const contracts: any[] = []

  campaigns.map((item) => {
    contracts.push({ ...contract, args: [BigInt(item)] })
  })

  const { data } = useContractReads({
    contracts
  })

  useEffect(() => {
    data?.map((dataitem, index) => {
      if (dataitem.result === true) return setCampaignId(campaigns[index])
    })
  }, [campaigns, setCampaignId, data])

  return { campaignId }

}

export function useGetCampaignInfo(id: number) {
  const { data } = useContractRead({
    address: addressList.Campaign,
    abi: Campaign__factory.abi,
    functionName: "getCampaignInfo",
    args: [BigInt(id)],
  });

  const campaign = useMemo(() => {
    if (!data) return null;

    return data;
  }, [data]);

  return { campaign };
}

export function useGetMultipleCampaignInfo(id: number[]) {
  const contract = {
    address: addressList.Campaign,
    abi: Campaign__factory.abi,
    functionName: "getCampaignInfo",
  };

  const contracts = id.map((i) => ({
    ...contract,
    args: [BigInt(i)],
  }));
  const { data } = useContractReads({
    contracts,
  });

  const campaign = useMemo(() => {
    if (!data) return [];

    // return data?.map((item) => item.result as IDetailCampaign);
    return data?.map((item, index) => ({
      id: id[index],
      name: (item.result as IDetailCampaign).name,
      description: (item.result as IDetailCampaign).description,
      baseURI: (item.result as IDetailCampaign).baseURI,
      timeStart: (item.result as IDetailCampaign).timeStart,
      timeEnd: (item.result as IDetailCampaign).timeEnd,
      nftId: (item.result as IDetailCampaign).nftId,
    }));
  }, [data, id]);

  return { campaign };
}

export function useGetCampaignInfoByPeriod(period: string) {
  const { data } = useContractRead({
    address: addressList.Campaign,
    abi: Campaign__factory.abi,
    functionName: "getCampaignByPeriod",
    args: [period],
  });

  const campaignIdList = useMemo(() => {
    if (!data) return [];
    return data.map((d: BigInt) => Number(d));
  }, [data]);

  const { campaign } = useGetMultipleCampaignInfo(campaignIdList);

  const result = useMemo(() => {
    if (!campaign) return [];
    return campaign;
  }, [campaign]);

  return { result };
}

export function useGetTokenOfOwnerByCampaign(campaignId: number) {
  const { address } = useAccount();
  const [allTokenData, setAllTokenData] = useState<IMetadata[]>([]);

  const { data } = useContractRead({
    address: addressList.CryptoCoffPoint,
    abi: CryptoCoffPoint__factory.abi,
    functionName: "getTokenOfOwnerByCampaign",
    args: [address!, BigInt(campaignId)],
    enabled: address !== undefined,
  });

  const nftIdList = useMemo(() => {
    if (!data) return [];

    return data.map((item) => Number(item));
  }, [data]);

  const contract = {
    address: addressList.CryptoCoffPoint,
    abi: CryptoCoffPoint__factory.abi,
    functionName: "tokenURI",
  };

  const contracts = nftIdList.map((i) => ({
    ...contract,
    args: [BigInt(i)],
  }));
  const { data: UriResult } = useContractReads({
    contracts,
  });

  const tokenUriList = useMemo(() => {
    if (!UriResult) return [];
    return UriResult.map((item) => item.result);
  }, [UriResult]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = tokenUriList.map(async (url, index) => {
          const res = await readMetadataService.readMetadata(url as string);
          return {
            id: nftIdList[index],
            name: res.data.name,
            description: res.data.description,
            image: res.data.image,
            attributes: res.data.attributes,
          };
        });

        const result = await Promise.all(promises);
        setAllTokenData(result);
      } catch (error) {
        // Handle errors if any
        console.error("Error fetching token data:", error);
      }
    };

    fetchData();
  }, [tokenUriList, nftIdList]);

  const claimedToken = useMemo(() => {
    return allTokenData.filter((item) => {
      return item.attributes[0].value === 10;
    });
  }, [allTokenData]);

  return { nftIdList, tokenUriList, allTokenData, claimedToken };
}
