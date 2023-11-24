import { addressList } from "@/constants/addressList";
import { CryptoCoffPoint__factory } from "@/typechain-types";
import { useContractWrite } from "wagmi";

export function useAddPoint(address: `0x${string}`, point: number) {
  const { write } = useContractWrite({
    address: addressList.CryptoCoffPoint,
    abi: CryptoCoffPoint__factory.abi,
    functionName: "addPoint",
    args: [address, BigInt(point)],
  });
}
