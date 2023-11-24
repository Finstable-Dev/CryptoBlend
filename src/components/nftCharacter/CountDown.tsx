"use client";

import { useEffect, useState } from "react";

interface Props {
  dateTime: number;
}

export const CountDown = ({ dateTime }: Props) => {
  const [EndCampaign, setEndCampaign] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date(dateTime * 1000);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const formattedHours = h < 10 ? `0${h}` : h;
      setHours(Number(formattedHours));

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setEndCampaign(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dateTime]);

  return (
    <div className="">
      {EndCampaign ? (
        <>
          <h1>Time Out</h1>
        </>
      ) : (
        <>
          <div className=" flex felx-row w-full justify-start text-center items-end gap-x-3">
            <div>
              <span>days</span>
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center border-[1.3px] h-[40px] w-[42px]  border-[#FFA532] rounded-[6.837px] ">
                  <span className=" text-2xl font-semibold">{days}</span>
                </div>
              </div>
            </div>
            <span className="pb-2">:</span>

            <div className="flex flex-col items-center justify-center">
              <span>hours</span>
              <div className=" flex items-center justify-center border-[1.3px] h-[40px] w-[42px]   border-[#FFA532] rounded-[6.837px] ">
                <span className="text-2xl font-semibold">{hours}</span>
              </div>
            </div>
            <span className="pb-2">:</span>

            <div className="flex flex-col items-center justify-center">
              <span>minutes</span>
              <div className=" flex items-center justify-center border-[1.3px] h-[40px] w-[42px]   border-[#FFA532] rounded-[6.837px] ">
                <span className="text-2xl font-semibold">{minutes}</span>
              </div>
            </div>
            <span className="pb-2">:</span>

            <div className="flex flex-col items-center justify-center">
              <span>seconds</span>
              <div className=" flex items-center justify-center border-[1.3px] h-[40px] w-[42px]  border-[#FFA532] rounded-[6.837px] ">
                <span className=" text-2xl font-semibold">{seconds}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
