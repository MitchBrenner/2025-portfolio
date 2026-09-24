import Image from "next/image";
import type { TechItem } from "@/lib/tech";

function Tech({ name, image, invert }: TechItem) {
  return (
    <li className="group font-satoshi flex items-center gap-3 py-1.5 text-[15px] text-white/65 transition-colors duration-300 hover:text-white">
      <span className="relative size-[18px] shrink-0">
        <Image
          src={image}
          alt=""
          fill
          sizes="18px"
          className={`object-contain ${invert ? "invert" : ""}`}
        />
      </span>
      {name}
    </li>
  );
}

export default Tech;
