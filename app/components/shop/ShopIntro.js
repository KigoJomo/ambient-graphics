const { default: SplitText } = require("../SplitText");

const ShopIntro = () => {
    return (
      <section>
        <SplitText word={"art"} />
        <SplitText word={"worth"} />
        <SplitText word={"owning"} />
      </section>
    );
}

export default ShopIntro;