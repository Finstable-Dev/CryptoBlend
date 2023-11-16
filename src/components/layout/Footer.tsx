import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="flex flex-row justify-between items-center w-full h-[70px] px-8"
      style={{
        boxShadow: "0px -2px 4px 0px rgba(0, 0, 0, 0.08)",
      }}
    >
      <Link href="/#">
        <Image
          className="cursor-pointer w-[154px] h-[34px]"
          src="/image/logoipsim.png"
          width={154}
          height={34}
          alt="logo"
        />
      </Link>
      <h6>Copyright ©2023 CoffNFT.co</h6>
    </div>
  );
};

export default Footer;
