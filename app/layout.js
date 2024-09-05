import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'

export const metadata = {
  title: 'Ambient Graphics',
  description: 'Where art meets professionalism.',
  metadataBase: new URL('https://ambientgraphics.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: '/images/open-graph.webp',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col relative bg-ag-black">
        <Header />
        <main className="overflow-hidden flex flex-col flex-shrink-0 flex-grow-0">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
