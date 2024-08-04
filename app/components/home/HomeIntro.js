import TypewrittenText from "../TypewrittenText";

const HomeIntro = () => {
  return (
    <section className="flex flex-col">
      <div className="desc w-full flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <h2>meet the artist</h2>
        <div className="w-full md:w-1/2 md:pt-6 text-right">
          <TypewrittenText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim." />
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
