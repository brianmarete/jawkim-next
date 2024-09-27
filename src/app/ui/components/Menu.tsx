import Link from "next/link";
import { workSans } from "@/app/ui/fonts";
import Logo from "@/app/ui/components/Logo";

const Menu = () => {
  return (
    <header
      className={`bg-gray-900 text-white ${workSans.className} sticky top-0 z-[999]`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <nav>
          <ul className="flex space-x-6 text-sm">
            {[
              "HOME",
              "ABOUT US",
              "OUR SERVICES",
              "PROJECTS",
              "BLOG",
              "CONTACT US",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="hover:text-yellow-400 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
