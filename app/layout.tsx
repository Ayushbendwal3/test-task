import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const Montserrat = Poppins({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Application Test Task",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <body className={Montserrat.className}>
          <Providers>{children}</Providers>
        </body>
      </head>
    </html>
  );
}
