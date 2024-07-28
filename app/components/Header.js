"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/ag.svg";

const Pages = ["gallery", "about", "shop", "contact"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="w-[95%] h-fit overflow-hidden flex flex-col items-center gap-0 fixed top-4 md:top-6 backdrop-blur-3xl z-10">
      <div className="w-full flex items-center justify-between border border-gray-500 rounded-2xl gap-8 px-4 md:px-8 py-2">
        <Link href="/" className="logo flex items-center gap-2">
          <Image src={logo} alt="logo" className="h-8 w-8" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {Pages.map((page) => (
            <Link key={page} href={`/${page}`} className="capitalize">
              {page}
            </Link>
          ))}
        </nav>
        <span
          className="material-symbols-outlined md:hidden open-menu cursor-pointer"
          onClick={toggleMenu}
        >
          menu
        </span>
      </div>

      <nav
        className={`mobile-nav md:hidden w-full ${
          menuOpen ? "h-screen" : "h-0"
        } transition-height duration-300 flex flex-col items-center gap-20 overflow-hidden`}
      >
        <ul className="flex flex-col items-start gap-4 w-full h-fit border border-gray-500 rounded-2xl p-4 pb-12 mt-8">
          <Link
            href="/"
            className="capitalize w-full px-4 py-4 border-b border-gray-700"
            onClick={closeMenu}
          >
            home
          </Link>
          {Pages.map((page) => (
            <Link
              key={page}
              href={`/${page}`}
              className="capitalize w-full px-4 py-4 border-b border-gray-700"
              onClick={closeMenu}
            >
              {page}
            </Link>
          ))}
        </ul>
        <span
          className="close-menu material-symbols-outlined text-4xl w-20 aspect-square border border-gray-500 rounded-full flex items-center justify-center cursor-pointer"
          onClick={closeMenu}
        >
          close
        </span>
      </nav>
    </header>
  );
};

export default Header;
