import "./globals.css";
import satoshi from "../../public/fonts/satoshi";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

export const metadata = {
  title: "My Portfolio",
};

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body>{children}</body>
    </html>
  );
}
