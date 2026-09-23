import Image from "next/image";

function Tech({ name, image }: { name: string; image: string }) {
  return (
    <div className="font-satoshi inline-flex w-48 shrink-0 items-center gap-3 whitespace-nowrap rounded-2xl border border-white/10 bg-[#202a33]/90 px-5 py-4 text-base font-medium text-white/80 transition-colors hover:border-white/25 hover:bg-[#273641]">
      <div className="relative h-7 w-7 shrink-0">
        <Image
          src={image}
          alt=""
          fill
          sizes="28px"
          className={`object-contain ${
            name === "Next.js" || name === "Expo" ? "invert" : ""
          }`}
        />
      </div>
      <span>{name}</span>
    </div>
  );
}

export default Tech;
