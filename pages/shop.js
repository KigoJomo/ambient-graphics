import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Map through your product data and render ProductCard components */}
          {/* Example: <ProductCard title="Product Title" image="path-to-image.jpg" price="$100" /> */}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Shop;
