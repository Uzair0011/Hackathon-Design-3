"use client";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
import { useState } from "react";
import { ImCross } from "react-icons/im";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="w-full bg-white flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6">
      {/* Logo */}
      <div>
        <Link href="/">
          {" "}
          <Image src="/logo.png" alt="logo" width={59} height={20} />
        </Link>
      </div>

      {/* Navigation Menu */}
      <ul className="hidden md:flex gap-4 sm:gap-5 pl-0 sm:pl-20">
        <li className="text-sm hover:underline">
          <Link href="/">New & Featured</Link>
        </li>
        <li className="text-sm hover:underline">
          <Link href="/Detail">Men</Link>
        </li>
        <li className="text-sm hover:underline">
          <Link href="/Detail2">Women</Link>
        </li>
        <li className="text-sm hover:underline">
          <Link href="/Detail3">Kids</Link>
        </li>
        <li className="text-sm hover:underline">
          <Link href="/AllProducts">Sale</Link>
        </li>
        <li className="text-sm hover:underline">
          <Link href="/">SNKRS</Link>
        </li>
      </ul>

      {/* Search and Icons */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Search */}
        <div className="hidden lg:flex w-[160px] h-[40px] bg-primary rounded-full items-center ">
          <Image src="/search.png" alt="search icon" width={24} height={24} />
          <input
            className="w-full h-full  bg-primary ml-1"
            type="text"
            placeholder="Search"
          />
        </div>

        {/* Icons */}
        <div>
          <Link href={""}>
            <Image
              src="/heart.png"
              alt="wishlist icon"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <div>
          <Link href={"/cart"}>
            {" "}
            <Image src="/cart.png" alt="cart icon" width={24} height={24} />
          </Link>
        </div>
        {/* mobile navigation bar  */}
        <div className="md:hidden" onClick={toogleMenu}>
          {isMenuOpen ? <ImCross size={30} /> : <TiThMenu size={30} />}
        </div>
        {isMenuOpen && (
          <ul className="w-screen h-screen top-[70px] right-[10%] fixed z-10 p-3 rounded pl-20 pt-5 bg-white opacity-85 md:hidden">
            <li className="pb-10 pl-3 font-bold text-1xl">
              <a href="/" onClick={toogleMenu}>
                New & Featured
              </a>
            </li>

            <li className="pb-10 pl-3 font-bold text-1xl">
              <a href="#About" onClick={toogleMenu}>
                Men
              </a>
            </li>

            <li className="pb-10 pl-3 font-bold text-1xl">
              <a href="#Contact" onClick={toogleMenu}>
                Women
              </a>
            </li>
            <li className="pb-10 pl-3 font-bold text-1xl">
              <a href="#Contact" onClick={toogleMenu}>
                Kids
              </a>
            </li>
            <li className="pb-10 pl-3 font-bold text-1xl">
              <a href="#Contact" onClick={toogleMenu}>
                Sale
              </a>
            </li>
            <li className="pb-10 pl-3 font-bold text-1xl">
              <a href="#Contact" onClick={toogleMenu}>
                SNKRS
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
