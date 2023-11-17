import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="flex flex-row justify-between items-center w-full h-[70px] px-8"
      style={{
        background: "linear-gradient(282.7deg, #FFA532 0%, #FF7000 72.62%)",
        boxShadow: "0px -4px 4px 0px rgba(255, 165, 50, 0.05)",
      }}
    >
      <Link href="/#">
        <Image
          className="cursor-pointer w-[154px] h-[34px]"
          src="/image/whitelogs.png"
          width={154}
          height={34}
          alt="logo"
        />
      </Link>
      <h6 className="text-white">Copyright ©2023 CoffNFT.co</h6>
    </div>
  );
};

export default Footer;
