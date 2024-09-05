import TypewriterComponent from "../TypewriterComponent";

const { default: ScrollAnimationWrapper } = require("../ScrollAnimationWrapper");

const AtelierStudio = () => {
  return (
    <section className='flex flex-col gap-12 pt-16'>
      <ScrollAnimationWrapper>
        <TypewriterComponent textLevel="h2" className="font-normal text-center text-3xl" text={"Welcome to Ambient Graphics studio"} />
      </ScrollAnimationWrapper>
    </section>
  );
}

export default AtelierStudio;