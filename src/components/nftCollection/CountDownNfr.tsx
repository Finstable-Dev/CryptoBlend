"use client";

import React, { useEffect, useState } from "react";

interface CountDownNfrProps {
  date: number;
}

export const CountDownNfr: React.FC<CountDownNfrProps> = ({ date }) => {
  const [endCampaign, setEndCampaign] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date(date);

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
  }, [date]);

  return (
    <div>
      {endCampaign ? (
        <>
          <h1>Time Out</h1>
        </>
      ) : (
        <>
          <div className="flex felx-row w-full justify-center text-center items-end gap-x-1 px-3 py-1">
            <span className="text-tertiary">
              {hours}h:{minutes}m:{seconds}s
            </span>
          </div>
        </>
      )}
    </div>
  );
};
