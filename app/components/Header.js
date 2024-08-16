"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const pages = ["home", "catalog", "shop", "spotlight"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="w-screen h-16 flex-shrink-0 sticky -top-[2px] z-10 bg-ag-black">
      <div className="mobile-navigation w-full h-full px-6 flex md:hidden items-center justify-between relative">
        <Link href="/">
          <Image
            src="/images/logo.webp"
            alt="ambient graphics"
            width="1000"
            height="1000"
            className="w-28"
          />
        </Link>
        <button
          className="menu-button w-8 h-4 flex flex-col items-end gap-1"
          onClick={toggleMenu}
        >
          <span className="w-full h-0.5 bg-white"></span>
          <span className="w-3/4 h-0.5 bg-white"></span>
        </button>
        <nav
          className={`w-screen absolute top-full flex flex-col items-center backdrop-blur-3xl py-4 px-6 ${
            menuOpen ? "left-0" : "left-full"
          }`}
          style={{ height: "calc(100dvh - 4rem)" }}
        >
          {pages.map((page, index) => (
            <Link
              key={index}
              href={page === "home" ? "/" : `/${page}`}
              className="capitalize border-b py-6 px-4 w-full"
              onClick={closeMenu}
            >
              {page}
            </Link>
          ))}
          <p className="capitalize absolute bottom-6">
            copyright 2024 © ambient graphics
          </p>
        </nav>
      </div>
      <div className="desktop-nav w-full h-full px-6 hidden md:flex items-center justify-between relative">
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
              className="w-32"
            />
          </Link>
        </div>
        <nav className="flex items-center gap-8">
          <Link href="/shop" className="uppercase text-ag-ash">
            shop
          </Link>
          <Link href="/spotlight" className="uppercase text-ag-ash">
            spotlight
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
