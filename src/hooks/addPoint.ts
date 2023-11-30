import { addressList } from "@/constants/addressList";
import { IMetadata } from "@/interfaces/campaign.interface";
import readMetadataService from "@/services/readMetadata.service";
import { CryptoCoffPoint__factory } from "@/typechain-types";
import { useEffect, useMemo, useState } from "react";
import { useContractRead, useContractReads } from "wagmi";

interface IRequest {
  address: `0x${string}` | undefined;
  id: number | undefined;
}
export function useGetSuccessToken({ address, id }: IRequest) {
  const [tokenDataList, setTokenDataList] = useState<IMetadata[]>([]);
  const { data } = useContractRead({
    address: addressList.CryptoCoffPoint,
    abi: CryptoCoffPoint__factory.abi,
    functionName: "getTokenOfOwnerByIndex",
    args: [address!],
    enabled: !!address,
  });

  const tokenUriContract = {
    address: addressList.CryptoCoffPoint,
    abi: CryptoCoffPoint__factory.abi,
    functionName: "tokenURI",
  };

  const tokenIdList = useMemo(() => {
    if (!data) return [];
    return data.map((d: BigInt) => Number(d));
  }, [data]);

  const tokenUriContracts = useMemo(() => {
    return tokenIdList.map((id) => ({
      ...tokenUriContract,
      args: [BigInt(id)],
    }));
  }, [tokenIdList]);

  const { data: tokenUriList } = useContractReads({
    contracts: tokenUriContracts,
  });

  const allTokenUri = useMemo(() => {
    if (!tokenUriList) return [];
    return tokenUriList.map((item) => item.result as string);
  }, [tokenUriList]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = allTokenUri.map(async (url, index) => {
          const res = await readMetadataService.readMetadata(url as string);
          return {
            id: tokenIdList[index],
            name: res.data.name,
            description: res.data.description,
            image: res.data.image,
            attributes: res.data.attributes,
          };
        });

        const result = await Promise.all(promises);
        setTokenDataList(result);
      } catch (error) {
        // Handle errors if any
        console.error("Error fetching token data:", error);
      }
    };

    fetchData();
  }, [tokenUriList, tokenIdList]);

  const successToken = useMemo(() => {
    if (!tokenDataList) return [];
    if (!id)
      return tokenDataList.filter((item) => item.attributes[0].value === 9);
    return tokenDataList.filter(
      (item) =>
        item.attributes[0].value === 9 &&
        id &&
        tokenIdList.includes(id) &&
        item.id === id
    );
  }, [tokenDataList, id, tokenIdList]);

  return { successToken };
}

export function useGetTokenDataById(id: number) {
  const [data, setData] = useState<IMetadata>();
  const { data: tokenUri } = useContractRead({
    address: addressList.CryptoCoffPoint,
    abi: CryptoCoffPoint__factory.abi,
    functionName: "tokenURI",
    args: [BigInt(id)],
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await readMetadataService.readMetadata(tokenUri as string);
      setData({
        id,
        name: res.data.name,
        description: res.data.description,
        image: res.data.image,
        attributes: res.data.attributes,
      });
    };
    fetchData();
  }, [tokenUri, id]);

  return { data };
}
