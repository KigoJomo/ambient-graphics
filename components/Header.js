import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-2xl font-bold">Ambient Graphics</p>
        </Link>
        <nav>
          <Link href="/gallery">
            <p className="mx-2">Gallery</p>
          </Link>
          <Link href="/about">
            <p className="mx-2">About</p>
          </Link>
          <Link href="/shop">
            <p className="mx-2">Shop</p>
          </Link>
          <Link href="/contact">
            <p className="mx-2">Contact</p>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
