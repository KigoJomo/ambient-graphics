import CollectionOverview from "./CollectionOverview";

const HomeCollections = ()=>{
  const collections = [
    {
      title: "Handcrafted Treasures",
      tag: "Inspiration Overload",
      description:
        "Discover the artistry of handmade jewelry in the Handcrafted Treasures collection. Vibrant designs, from elegant beaded bracelets to bold necklaces, embody individuality and personal expression. Elevate your style with pieces that resonate with your journey and taste.",
      image: "/images/handcrafted.webp",
      link: "/catalog",
    },
    {
      title: "Timeless Portraits",
      tag: "Art Alchemy",
      description:
        "Explore the Timeless Portraits collection, capturing human essence through meticulously rendered pencil portraits. Each piece celebrates individuality and emotion, inviting you to reflect on the beauty and depth of the human form in a timeless medium.",
      image: "/images/portraits.webp",
      link: "/catalog",
    },
  ];
  

  return(
    <section className="h-fit flex flex-col gap-6 pb-12">
      <h2 className="uppercase">collection</h2>
      <CollectionOverview collections={collections} />
    </section>
  )
}

export default HomeCollections;