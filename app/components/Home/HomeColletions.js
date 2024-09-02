import CollectionOverview from "./CollectionOverview";

const HomeCollections = ()=>{
  const collections = [
    {
      title: "Sleek Posters",
      tag: "Elegant Visuals",
      description:
        "Discover the artistry of sleek posters in the Elegant Visuals collection. These posters feature stunning designs that will enhance any space. From minimalist prints to vibrant illustrations, each poster is a work of art that will captivate your imagination.",
      image: "/images/posters/poster2.webp",
      link: "/catalog/posters",
    },
    {
      title: "Timeless Portraits",
      tag: "Art Alchemy",
      description:
        "Explore the Timeless Portraits collection, capturing human essence through meticulously rendered pencil portraits. Each piece celebrates individuality and emotion, inviting you to reflect on the beauty and depth of the human form in a timeless medium.",
      image: "/images/portraits/portrait12.webp",
      link: "/catalog/portraits",
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