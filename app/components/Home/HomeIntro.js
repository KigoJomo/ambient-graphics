import Image from "next/image";
import SplitWord from "../SplitWord";

const HomeIntro = () => {
  return (
    <section className="flex flex-col">
      <div className="top flex w-full items-center md:items-start relative">
        <div className="w-[45%] flex md:hidden flex-row-reverse items-center justify-between z-[3]">
          <SplitWord word={"ambient"} rotate={true} column={true} />
          <SplitWord word={"graphics"} rotate={true} column={true} />
        </div>
        <div className="hidden md:flex flex-col z-10">
          <SplitWord word={"ambient"} className="text-black mix-blend-difference" />
          <SplitWord word={"graphics"} />
        </div>
        <div className="image w-4/5 md:w-1/3 aspect-[2/3] md:aspect-[3/4] absolute right-0 border z-[2]">
          <Image
            width={2000}
            height={2000}
            alt="ambient grpahics"
            className=""
            src="/images/vector_poster.webp"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
