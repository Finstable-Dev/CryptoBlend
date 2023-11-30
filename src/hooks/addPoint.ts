import { addressList } from "@/constants/addressList";
import { IMetadata } from "@/interfaces/campaign.interface";
import readMetadataService from "@/services/readMetadata.service";
import { CryptoCoffPoint__factory } from "@/typechain-types";
import { useMemo } from "react";
import { useAccount, useContractRead, useContractReads } from "wagmi";

export function useGetSuccessToken() {
  const { address } = useAccount();
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

  const tokenDataList = useMemo(() => {
    const result: IMetadata[] = [];
    if (!tokenUriList) return [];
    tokenUriList.forEach(async (item, index) => {
      const metadata = await readMetadataService.readMetadata(
        item.result as string
      );
      result.push({
        ...metadata.data,
        id: tokenIdList[index],
      });
    });
  }, [tokenUriList]);
}
