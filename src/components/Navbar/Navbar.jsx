/* eslint-disable no-unused-vars */
// import logo
import Logo from "/src/assets/Logo/icon.png";
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
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img src={Logo} alt="" className="w-10 inline-block items-center" />
            <span className="text-[#263238]">NEXCENT</span>
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
          {/* end */}

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
          {/* end */}

          {/* menu btn for only mobile devices 1*/}
          <div className="md:hidden">
            <button
              onClick={toogleMenu}
              className="text-nuetralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 " />
              ) : (
                <FaListUl className="h-6 w-6 " />
              )}
            </button>
          </div>
          {/* end */}
        </div>
        {/* end */}

        {/* nav items menu mobile devices 2*/}
        <div
          className={`space-y-4 px-4 py-7  mt-16 mx-3 rounded-lg bg-brandPrimary  ${
            isMenuOpen ? "block fixed top-0 right-0 left-0  " : "hidden"
          }`}
        >
          {navItems.map((link, path) => {
            return (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-white hover:text-brandPrimary first:font-meduim"
              >
                {link.link}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
