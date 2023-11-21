import useDialog from "@/store/UIProvider/dialog.store";
import { DialogViews } from "@/store/UIProvider/dialog.type";
import Image from "next/image";
import { CountDownNfr } from "./CountDownNfr";

interface MockArrayData {
  id: number;
  img: string;
  name: string;
  count: number;
  claimed: boolean;
  category: string;
}

const CardCollection: React.FC<{ data: MockArrayData[]; select: string }> = ({
  data,
  select,
}) => {
  const { openDialog, setDialogView } = useDialog();

  const onClickOpen = () => {
    setDialogView(DialogViews.CLAIM_DIALOG);
    openDialog();
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row flex-nowrap   w-full ">
        <div className=" flex flex-col my-auto max-w-[250px] h-[265px] sm:h-[515px] w-full justify-between  mr-14 mb-10">
          <div className="flex flex-row sm:flex-col  gap-2 h-full">
            <Image
              className="cursor-pointer w-[170px] h-[170px] rounded-[16px] border-[5px] border-[#FFA532]"
              src="/Caffeine.png"
              width={170}
              height={170}
              alt="logo"
            />
            <div className="flex flex-col">
              <span className=" text-2xl font-semibold">CaffeineCraft</span>
              <span className="text-tertiary text-md font-semibold">
                NFT Colletion
              </span>
              <span className="text-md font-semibold">2</span>
              <span className="text-tertiary text-md font-semibold">Used</span>
              <span className="text-md font-semibold">1</span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-md font-semibold pb-2 pt-5 sm:pt-0 ">
              End time Campaign
            </span>
            <div className=" rounded-full border-[1.86px] border-[#454545] text-center">
              <span className=" text-tertiary text-[32px] font-semibold">
                <CountDownNfr date="12/31/2023 23:59:59" />
              </span>
            </div>
          </div>
        </div>
        {/*  */}
        <div className=" flex flex-row  overflow-x-scroll overflow-y-scroll mlg:no-scrollbar  lg:scrollbar ">
          {data.map((item, index) => {
            return (
              <>
                <div
                  key={item.id}
                  className="transition ease-in-out delay-150 hover:translate-y-1 duration-300 flex flex-col bg-[#292929] min-w-[299px]  sm:min-w-[398px] h-[390px]  sm:h-[515px] p-6 mr-14 mb-2 rounded-[16px] border-[#454545] border-[1px] gap-4 hover:border-[1px] hover:border-[#FFA532] hover:shadow-[1px_1px_50px_-25px_rgba(255,122,0,0.9)] "
                >
                  <div className=" flex justify-center items-center ">
                    <Image
                      className="cursor-pointer w-[270px] sm:w-[350px] h-[220px] sm:h-[351px] rounded-[16px] border-[5px] border-[#FFA532] "
                      src={item.img}
                      width={302}
                      height={301}
                      alt="logo"
                    />
                  </div>
                  <span className=" text-2xl font-semibold">{item.name}</span>
                  {item.claimed === true ? (
                    <div className=" flex flex-col ">
                      <span className="text-[#FF890A] text-sm font-semibold">
                        Quantity
                      </span>
                      <span className="text-sm font-semibold">
                        {item.count}/9 piece
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-row justify-between  items-center">
                      <div className=" flex flex-col ">
                        <span className="text-[#FF890A] text-sm font-semibold">
                          Quantity
                        </span>
                        <span className="text-sm font-semibold">
                          {item.count}/9 piece
                        </span>
                      </div>

                      <button
                        className=" flex h-[48px] py-3 px-6 justify-center items-center rounded-full "
                        style={{
                          borderRadius: "99px",
                          background:
                            "linear-gradient(282.7deg, #FFA532 0%, #FF7000 72.62%)",
                        }}
                        onClick={() => onClickOpen()}
                      >
                        <span className="text-white text-md font-medium ">
                          claim
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>
        {/*  */}
      </div>
    </>
  );
};
export default CardCollection;
