import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found · Mitchell Brenner",
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-svh flex-col items-center overflow-hidden bg-page px-6 pt-[22svh] text-center text-white">
      <p className="font-satoshi text-xs font-semibold uppercase tracking-[0.3em] text-accent">
        404
      </p>
      <h1 className="font-satoshi mt-4 text-4xl font-black tracking-tight sm:text-6xl">
        Off the trail.
      </h1>
      <p className="font-satoshi mt-4 max-w-md text-base text-white/65 sm:text-lg">
        This page doesn&rsquo;t exist, or it moved. Let&rsquo;s get you back.
      </p>
      <Link
        href="/"
        className="font-satoshi relative z-10 mt-8 inline-flex min-h-11 items-center rounded-full bg-mist px-6 text-sm font-semibold text-page transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mist"
      >
        Back home
      </Link>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45svh]">
        <Image
          src="/images/front-mountain.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top opacity-80"
        />
      </div>
    </main>
  );
}
