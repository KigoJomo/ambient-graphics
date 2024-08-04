import "./globals.css";
// import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';

import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Ambient Graphics",
  description: "Where art meets perfection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-start relative">
        <Header />
        <main className="w-full flex flex-col items-center z-[5]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
