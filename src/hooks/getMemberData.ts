import { addressList } from "@/constants/addressList";
import { CryptoCoffMember__factory } from "@/typechain-types";
import { useMemo } from "react";
import { useContractRead, useAccount } from "wagmi";

export function useGetMemberData() {
  const { address } = useAccount();
  const { data } = useContractRead({
    address: addressList.CryptoCoffMember,
    abi: CryptoCoffMember__factory.abi,
    functionName: "getTokenOfOwnerByIndex",
    args: [address!],
  });

  const memberNftId = useMemo(() => {
    if (!data || data.length === 0) return null;
    return Number(data[0]);
  }, [data]);

  const { data: tokenURI } = useContractRead({
    address: addressList.CryptoCoffMember,
    abi: CryptoCoffMember__factory.abi,
    functionName: "tokenURI",
    args: [BigInt(memberNftId ?? 0)],
  });

  return { memberNftId, tokenURI };
}
