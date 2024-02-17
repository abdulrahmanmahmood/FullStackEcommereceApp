import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import { ClerkProvider } from '@clerk/nextjs'
import Header from "./_components/Header";


const inter = Roboto({ subsets: ["latin"], weight:"700" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
    </ClerkProvider>

  );
}
