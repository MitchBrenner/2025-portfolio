import localFont from "next/font/local";

const satoshi = localFont({
  src: [
    { path: "./Satoshi-Light.otf", weight: "300", style: "normal" },
    { path: "./Satoshi-Regular.otf", weight: "400", style: "normal" },
    { path: "./Satoshi-Medium.otf", weight: "500", style: "normal" },
    { path: "./Satoshi-Bold.otf", weight: "700", style: "normal" },
    { path: "./Satoshi-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export default satoshi;
