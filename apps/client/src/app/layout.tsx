import type { Metadata } from "next";
import "./index.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { WalletProvider } from "./Walletcontext";


export const metadata: Metadata = {
  title: "GroovyBet",
  description: "GroovyBet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
      </WalletProvider>
               
     </body>
    </html>
  );
}
