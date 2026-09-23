import Image from "next/image";

function Tech({ name, image }: { name: string; image: string }) {
  return (
    <div className="font-satoshi inline-flex w-max shrink-0 items-center gap-2 whitespace-nowrap rounded-xl border border-white/10 bg-[#202a33]/90 px-3.5 py-2.5 text-sm font-medium sm:w-48 sm:gap-3 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base text-white/80 transition-colors hover:border-white/25 hover:bg-[#273641]">
      <div className="relative size-5 shrink-0 sm:size-7">
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
