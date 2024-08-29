import HomeAbout from "./components/Home/HomeAbout";
import HomeCollections from "./components/Home/HomeColletions";
import HomeContact from "./components/Home/HomeContact";
import HomeIntro from "./components/Home/HomeIntro";

export default function Home() {
  return (
    <>
      <HomeIntro />
      <HomeAbout />
      <HomeCollections />
      <HomeContact />
    </>
  );
}
