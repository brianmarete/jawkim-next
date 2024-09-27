import Link from "next/link";
import { workSans } from "@/app/ui/fonts";
import Logo from "@/app/ui/components/Logo";
import { FaMobileAlt } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

const Menu = () => {
  return (
    <header className={`${workSans.className}`}>
      <div className="bg-very-dark-blue ">
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

      <div className="bg-very-dark-blue mx-auto px-4 py-4 flex justify-between items-center text-white max-w-7xl rounded-b-md before:absolute before:inset-0 before:bg-white before:bg-scale-pattern before:bg-bottom before:bg-repeat-x before:z-[-1] before:h-32">
        <Logo />
        <nav>
          <ul className="flex space-x-12 text-sm">
            {["HOME", "ABOUT US", "OUR SERVICES", "BLOG", "CONTACT US"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
