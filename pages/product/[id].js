import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Product Detail: {id}</h1>
        <p>Details about the product...</p>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
