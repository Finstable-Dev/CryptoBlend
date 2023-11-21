import Image from "next/image";

export default function mouse() {
  return (
    <div>
      <Image
        className="cursor-pointer animate-bounce direction-alternate delay-500"
        src="/mousetop.png"
        width={48}
        height={48}
        alt="logo"
      />
    </div>
  );
}
