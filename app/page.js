import HomeAbout from "./components/Home/HomeAbout";
import HomeCollections from "./components/Home/HomeColletions";
import HomeIntro from "./components/Home/HomeIntro";

export default function Home() {
  return (
    <>
      <HomeIntro />
      <HomeAbout />
      <HomeCollections />
    </>
  );
}
