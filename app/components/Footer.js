import Link from "next/link";

const direct = [
  { title: "telephone", value: "tel:+254114900087" },
  { title: "email", value: "mailto:kigojomo@gmail.com" },
];

const socials = [
  { title: "instagram", value: "https://www.instagram.com/ambient_graphics/" },
  { title: "facebook", value: "https://facebook.com" },
  { title: "twitter", value: "https://twitter.com/" },
];

const ContactCategory = ({ title, children }) => {
  return (
    <div className="w-full flex border-t border-b border-gray-500">
      <p className="w-1/2 text-lg uppercase py-2">{title}</p>
      <div className="w-1/2 flex flex-col">{children}</div>
    </div>
  );
};

const ContactLink = ({ to, name }) => {
  return (
    <Link
      href={to}
      target="_blank"
      className="w-full py-2 md:py-4 border-t border-gray-500 uppercase"
    >
      {name}
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="w-full px-4 md:px-8 py-8 flex flex-col gap-0">
      <ContactCategory title={"our social"}>
        {socials.map((link) => (
          <ContactLink key={link} to={link.value} name={link.title} />
        ))}
      </ContactCategory>
      <ContactCategory title={"contact us"}>
        {direct.map((link) => (
          <ContactLink key={link} to={link.value} name={link.title} />
        ))}
      </ContactCategory>
    </footer>
  );
};

export default Footer;
