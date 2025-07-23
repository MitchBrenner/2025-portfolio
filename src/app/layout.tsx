import "./globals.css";
import satoshi from "../../public/fonts/satoshi";

export const metadata = {
  title: "My Portfolio",
};

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
