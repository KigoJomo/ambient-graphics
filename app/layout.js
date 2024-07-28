import { Inter } from "next/font/google";
import "./globals.css";
// import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';

import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ambient Graphics",
  description: "Where art meets perfection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-start relative">
        <Header/>
        <main className="w-full min-h-screen flex flex-col items-center z-[5]">{children}</main>
        <footer className="w-full p-8 border-t border-ag-black"></footer>
      </body>
    </html>
  );
}
