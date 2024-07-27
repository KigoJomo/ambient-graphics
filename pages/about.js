import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">About the Artist</h1>
        <p>Details about the artist...</p>
      </main>
      <Footer />
    </>
  );
};

export default About;
