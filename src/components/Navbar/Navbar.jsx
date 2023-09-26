/* eslint-disable no-unused-vars */
// import logo
import Logo from "/src/assets/Logo/logo.png";
import React, { useEffect, useState } from "react";

// import react srcoll
import { Link } from "react-scroll";

// import react icons
import { FaXmark, FaListUl } from "react-icons/fa6";

const Navbar = () => {
  // here the code
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //   toggle menu btn
  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //   function for making navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  //   navItems array
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonials", path: "testimonials" },
    { link: "FAQ", path: "faq" },
  ];
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav>
        <div>
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img src={Logo} alt="" className="w-10 inline-block items-center" />
            <span className="text-[#263238]">Lorem</span>
          </a>

          {/* nav items for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map((link, path) => {
              return (
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={path}
                  className="block text-base text-gray900 hover:text-brandPrimary first:font-meduim"
                >
                  <li>{link.link}</li>
                </Link>
              );
            })}
          </ul>

          {/* btn for large devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-brandPrimary hover:text-gray900"
            >
              Login
            </a>
            <button
              className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded
            hover:bg-nuetralDGrey"
            >
              Sign Up
            </button>
          </div>

          {/* menu btn for only mobile devices */}
          <div className="md:hidden">
            <button className="text-nuetralDGrey focus:outline-none focus:text-gray-500">
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 " />
              ) : (
                <FaListUl className="h-6 w-6 " />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
