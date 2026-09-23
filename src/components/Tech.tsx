import Image from "next/image";

function Tech({ name, image }: { name: string; image: string }) {
  return (
    <div className="font-satoshi inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/10 px-3 py-1.5 text-sm text-white/75">
      <div className="relative h-4 w-4 shrink-0">
        <Image src={image} alt="" fill sizes="16px" className="object-contain" />
      </div>
      <span>{name}</span>
    </div>
  );
}

export default Tech;
