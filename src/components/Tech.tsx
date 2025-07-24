import Image from "next/image";
import React from "react";

function Tech({ name, image }: { name: string; image: string }) {
  return (
    <div className="group flex items-center gap-4 px-5 py-1 m-1 rounded-xl backdrop-blur-md bg-white/10 border border-white/10 shadow-md transition-transform duration-300 hover:scale-105 hover:bg-white/15">
      <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
        <Image src={image} alt={name} fill className="object-contain" />
      </div>
      <p className="text-white font-thin text-sm">{name}</p>
    </div>
  );
}

export default Tech;
