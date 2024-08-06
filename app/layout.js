import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Ambient Graphics",
  description: "Where art meets professionalism.",
  metadataBase: new URL("https://ambientgraphics.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    images: "/images/open-graph.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col relative bg-ag-black">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
