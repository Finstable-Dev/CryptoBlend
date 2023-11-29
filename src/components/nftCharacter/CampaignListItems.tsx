import { useGetTokenOfOwnerByCampaign } from "@/hooks/getCampaign";
import { IDetailCampaign } from "@/interfaces/campaign.interface";
import readMetadataService from "@/services/readMetadata.service";
import useDialog from "@/store/UIProvider/dialog.store";
import { DialogViews } from "@/store/UIProvider/dialog.type";
import Image from "next/image";
import { useEffect, useState } from "react";

const CampaignListItems: React.FC<{
  detail: IDetailCampaign | null;
}> = ({ detail }) => {
  const { openDialog, setDialogView, setId } = useDialog();
  const [fullImageSrc, setFullImageSrc] = useState("");
  useEffect(() => {
    if (!detail?.baseURI) return;
    const url = `${detail?.baseURI}/9point.json`;
    const fetchData = async () => {
      const res = await readMetadataService.readMetadata(url);
      setFullImageSrc(res.data.image);
    };
    fetchData();
  }, [detail]);
  const startDate = new Date(Number(detail?.timeStart || 0) * 1000);
  const endDate = new Date(Number(detail?.timeEnd || 0) * 1000);

  return (
    <div className="flex sm:flex-row flex-col">
      <div className="transition ease-in-out delay-150 hover:translate-y-1 w-[398px] duration-300 flex flex-col bg-[#292929]  p-6 mr-14 mb-2 rounded-[16px] border-[#454545] border-[1px] gap-4 hover:border-[1px] hover:border-[#FFA532] hover:shadow-[1px_1px_50px_-25px_rgba(255,122,0,0.9)] ">
        <div className=" flex flex-col my-auto  w-full justify-between">
          <div className="flex flex-col  gap-2 h-full">
            <Image
              className="cursor-pointer w-[352px] h-[352px] rounded-[16px]"
              src={fullImageSrc || "/Caffeine.png"}
              width={352}
              height={352}
              alt="logo"
            />
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="font-semibold">{detail?.name}</h1>
                <h5 className="font-semibold">{detail?.description}</h5>
              </div>
              <span className="text-md font-semibold">
                {startDate.getDate()}/{startDate.getMonth()}/
                {startDate.getFullYear()} - {endDate.getDate()}/
                {endDate.getMonth()}/{endDate.getFullYear()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CampaignListItems;
