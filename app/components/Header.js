"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const pages = ["home", "catalog", "shop", "atelier"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="w-screen h-16 flex-shrink-0 sticky -top-[2px] z-10">
      <div className="mobile-navigation w-full h-full flex md:hidden items-center justify-between relative">
        <div className="w-full h-full px-6 backdrop-blur z-[11] flex items-center justify-between">
          <Link href="/" className="">
            <Image
              src="/images/logo.webp"
              alt="ambient graphics"
              width="1000"
              height="1000"
              className="w-28"
            />
          </Link>
          <button
            className={`menu-button w-8 h-8 flex flex-col items-end justify-center gap-1 relative ${menuOpen && 'hamburger-open'} `}
            onClick={toggleMenu}
          >
            <span className="w-full h-0.5 bg-white"></span>
            <span className="w-3/4 h-0.5 bg-white"></span>
          </button>
        </div>

        <nav
          className={`w-screen h-[102vh] z-10 absolute top-0 flex flex-col items-center bg-ag-black pt-24 pb-16 px-6 ${
            menuOpen ? "left-0" : "left-full"
          }`}
        >
          {pages.map((page, index) => (
            <Link
              key={index}
              href={page === "home" ? "/" : `/${page}`}
              className="capitalize border-b py-6 px-4 w-full text-center"
              onClick={closeMenu}
            >
              {page}
            </Link>
          ))}
          <p className="capitalize mt-auto">
            copyright 2024 © ambient graphics
          </p>
        </nav>
      </div>

      <div className="desktop-nav w-full h-full px-6 backdrop-blur-3xl hidden md:flex items-center justify-between relative">
        <nav className="flex items-center gap-8">
          <Link href="/" className="uppercase text-ag-ash">
            Home
          </Link>
          <Link href="/catalog" className="uppercase text-ag-ash">
            catalog
          </Link>
        </nav>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image
              src="/images/logo.webp"
              alt="ambient graphics"
              width="100"
              height="100"
              className="w-32 cursor-pointer"
            />
          </Link>
        </div>
        <nav className="flex items-center gap-8">
          <Link href="/shop" className="uppercase text-ag-ash">
            shop
          </Link>
          <Link href="/atelier" className="uppercase text-ag-ash">
            atelier
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
