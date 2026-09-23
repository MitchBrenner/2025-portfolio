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
    <html lang="en" className={satoshi.variable} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#EBEBEB" />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")==="dark"){document.documentElement.classList.add("dark");document.querySelector('meta[name="theme-color"]').setAttribute("content","#020305")}}catch(e){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
