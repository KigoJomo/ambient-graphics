import Header from "../components/Header";
import Footer from "../components/Footer";
import ArtworkCard from "../components/ArtworkCard";

const Gallery = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Map through your artwork data and render ArtworkCard components */}
          {/* Example: <ArtworkCard title="Artwork Title" image="path-to-image.jpg" /> */}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
