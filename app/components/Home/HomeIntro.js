import Image from "next/image";
import SplitWord from "../SplitWord";
import ScrollAnimationWrapper from "../ScrollAnimationWrapper";
import TypewriterComponent from "../TypewriterComponent";
import RoundLink from "../RoundLink";

const HomeIntro = () => {
  return (
    <section className="flex flex-col gap-14 md:gap-20">
      <div className="top flex w-full items-center md:items-start relative">

        <div className="w-[45%] flex md:hidden flex-row-reverse items-center justify-between z-[3]">
          <ScrollAnimationWrapper variant="slideInBottom">
            <SplitWord word={"ambient"} rotate={true} column={true} className="" />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper variant="slideInTop">
            <SplitWord word={"graphics"} rotate={true} column={true} className="" />
          </ScrollAnimationWrapper>
        </div>

        <div className="hidden md:flex flex-col z-[3]">
          <ScrollAnimationWrapper variant="slideInRight">
            <SplitWord word={"ambient"} className="" />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper variant="slideInLeft">
            <SplitWord word={"graphics"} className="" />
          </ScrollAnimationWrapper>
        </div>

        <ScrollAnimationWrapper className="image w-4/5 md:w-1/3 aspect-[2/3] md:aspect-[3/4] absolute right-0 border border-ag-brown z-[4] mix-blend-exclusion">
          <Image
            width={2000}
            height={2000}
            alt="ambient grpahics"
            className=""
            src="/images/vector_poster.webp"
          />
        </ScrollAnimationWrapper>
      </div>
      <div className="w-full bottom flex flex-col md:flex-row items-end">
        <div className="md:h-28 w-full md:w-2/5">
          <TypewriterComponent text={"Discover stunning, original pieces by our team. Explore the collection, purchase unique artwork, or commission a custom piece."} />
        </div>
        <ScrollAnimationWrapper duration={2} className={"md:ml-24 md:mt-0"}>
          <RoundLink href="/catalog" text="catalog" />
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default HomeIntro;
