"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { workSans } from "@/app/ui/fonts";
import Logo from "@/app/ui/components/Logo";

import { FaMobileAlt } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";

import { useState, useEffect } from "react";
import clsx from "clsx";

const Menu = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About us",
      href: "/about",
    },
    {
      name: "Our services",
      href: "/services",
    },
    {
      name: "Blog",
      href: "#",
    },
    {
      name: "Contact us",
      href: "/contact",
    },
  ];

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <header className={`${workSans.className}`}>
      <div className="bg-very-dark-blue hidden md:block">
        <div className="flex justify-between max-w-7xl mx-auto">
          <ul className="flex">
            <li className="px-5 py-4 text-gray-400 inline-block relative after:border-r after:absolute after:border-gray-400 after:top-1/2 after:right-0 after:h-4 after:mt-[-8px]">
              <a
                href="tel:+254 202 010 348"
                className="ml-2 text-sm flex items-center"
              >
                <FaMobileAlt className="inline mr-3" />
                +254 720 239 456 782
              </a>
            </li>
            <li className="px-5 py-4 text-gray-400 inline-block">
              <a
                href="mailto:info@jawkimarchitects.com"
                className="ml-2 text-sm flex items-center"
              >
                <LuMail className="inline mr-3" /> info@jawkimarchitects.com
              </a>
            </li>
          </ul>
          <Link
            href="#"
            className="bg-mustard-yellow text-zinc-100 px-4 py-2 my-3 font-semibold hover:bg-yellow-500 transition-colors uppercase text-xs"
          >
            Get in touch
          </Link>
        </div>
      </div>

      <div className="bg-very-dark-blue mx-auto px-4 py-4 flex justify-between items-center text-white max-w-7xl md:rounded-b-md md:before:absolute md:before:inset-0 md:before:bg-white md:before:bg-scale-pattern md:before:bg-bottom md:before:bg-repeat-x md:before:z-[-1] md:before:h-32">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-12 text-sm ">
            {links.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={clsx(
                    "hover:text-mustard-yellow transition-colors uppercase",
                    {
                      "text-mustard-yellow": pathname === item.href,
                    }
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={toggleMenu}
          className="text-white hover:text-yellow-300 block md:hidden"
        >
          <MdOutlineMenu className="text-4xl" />
        </button>
      </div>
      <nav className="block md:hidden">
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-64 pt-24 bg-very-dark-blue transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="text-white hover:text-yellow-300 absolute top-8 right-8"
          >
            <MdClose className="text-4xl" />
          </button>
          <ul className="space-y-1 px-4">
            {links.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    "text-white hover:text-mustard-yellow block px-3 py-2 rounded-md text-base font-medium uppercase",
                    {
                      "text-mustard-yellow": pathname === item.href,
                    }
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="absolute bottom-8">
            <li className="px-4 py-2 text-gray-400 block">
              <a
                href="tel:+254 720 239 782"
                className="ml-2 text-sm flex items-center"
              >
                <FaMobileAlt className="inline mr-3" />
                +254 720 239 456 782
              </a>
            </li>
            <li className="px-4 py-2 text-gray-400 block">
              <a
                href="mailto:info@jawkimarchitects.com"
                className="ml-2 text-sm flex items-center"
              >
                <LuMail className="inline mr-3" /> info@jawkimarchitects.com
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
