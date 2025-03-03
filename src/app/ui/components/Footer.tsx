import { LuMapPin, LuPhoneCall, LuMail, LuClock4 } from "react-icons/lu";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
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
      name: "Services",
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

  return (
    <footer className="bg-very-dark-blue text-gray-200 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col items-center space-x-2">
            <LuMapPin className="text-4xl mb-4" />
            <div className="text-center">
              <p>4th Floor</p>
              <p>George Padmore Ridge Building</p>
              <p>George Padmore Rd</p>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-x-2">
            <LuPhoneCall className="text-4xl mb-4" />
            <div className="text-center">
              <a href="tel:+254202010348" className="block">
                (+254) 202 010 348
              </a>
              <a href="tel:+254720239456782" className="block">
                (+254) 720 239 456 782
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center space-x-2">
            <LuMail className="text-4xl mb-4" />
            <a href="mailto:info@jawkimarchitects.com" className="text-center">
              info@jawkimarchitects.com
            </a>
          </div>
          <div className="flex flex-col items-center space-x-2">
            <LuClock4 className="text-4xl mb-4" />
            <div className="text-center">
              <p>Mon - Fri : 9:00 AM - 5:00PM</p>
              <p>Sat 9:00 AM - 2:00PM</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-800 pt-8">
          <div>
            <Logo />
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-end">
            <h3 className="text-lg font-semibold text-white mb-4">
              <Link href={"/services"}>Our Services</Link>
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Master Planning</li>
              <li>Architectural Design</li>
              <li>Interior Design</li>
              <li>Project Management</li>
              <li>Project Planning</li>
            </ul>
          </div>

          {/* <div>
          TODO: Display latest posts here when blog is available
            <h3 className="text-lg font-semibold text-white mb-4">
              Latest Posts
            </h3>
            <ul className="space-y-4">
              <li className="flex space-x-2">
                <img
                  src="/placeholder1.jpg"
                  alt=""
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <h4 className="font-semibold">
                    THEN ONE DAY HE WAS SHOOTIN&apos; AT ...
                  </h4>
                  <p className="text-sm text-gray-400">Jul 18, 2020</p>
                </div>
              </li>
              <li className="flex space-x-2">
                <img
                  src="/placeholder2.jpg"
                  alt=""
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <h4 className="font-semibold">
                    WE&apos;VE A LOVEABLE SPACE THAT NEEDS YOUR ...
                  </h4>
                  <p className="text-sm text-gray-400">Jul 18, 2020</p>
                </div>
              </li>
              <li className="flex space-x-2">
                <img
                  src="/placeholder3.jpg"
                  alt=""
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <h4 className="font-semibold">
                    TAKIN&apos; A BREAK FROM ALL YOUR WORRIES ...
                  </h4>
                  <p className="text-sm text-gray-400">Jul 18, 2020</p>
                </div>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-wrap justify-between items-center">
          <p>&copy; 2024 ALL RIGHTS RESERVED</p>
          <nav>
            <ul className="flex space-x-4 text-sm">
              {links.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="hover:text-white uppercase">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
