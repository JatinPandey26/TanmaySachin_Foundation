import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import styles from "./styles.module.scss";

import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className=" shadow-sm bg-[#004445]  w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center  mx-10  justify-between w-full">
              <div className="flex justify-start items-center flex-shrink-0 ">
                <Image
                  src={"/TanmaySachinFoundation.png"}
                  className="rounded-lg"
                  layout="intrinsic"
                  width="80%"
                  height="70%"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-2">
                  <Link
                    href="/"
                    activeClass="Home"
                    to="/"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a className="cursor-pointer text-[#FFD800] font-thin px-3 no-underline py-2 text-md hover:text-white">
                      Home
                    </a>
                  </Link>
                  <Link
                    href="/whoweare"
                    activeClass="about"
                    to="/whoweare"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a className="cursor-pointer text-[#FFD800] font-thin px-3 no-underline py-2 text-md hover:text-white">
                      Who we are
                    </a>
                  </Link>
                  <Link
                    href={"/whatwedo"}
                    activeClass="work"
                    to="work"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a className="cursor-pointer text-[#FFD800] text-[#FFD800]  font-thin no-underline hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      What we do
                    </a>
                  </Link>

                  <Link
                    href={"/gallery"}
                    activeClass="Services"
                    to="work"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a className="cursor-pointer  text-[#FFD800] font-light hover:text-white px-3 py-2 no-underline rounded-md text-sm font-medium">
                      Gallery
                    </a>
                  </Link>

                  <Link
                    href={"/contactus"}
                    activeClass="about"
                    to="about"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a className="cursor-pointer text-[#FFD800] text-[#FFD800]  font-thin no-underline hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Contact Us
                    </a>
                  </Link>

                  <Link
                    href={"/donate"}
                    activeClass="contact"
                    to="contact"
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <a className="wrapList cursor-pointer no-underline justify-self-end  bg-[#FFD800]  text-[#004445] px-3 py-2 rounded-[5rem] text-sm font-medium  hover:text-[#004445]">
                      Donate Now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-[#FFD800] inline-flex items-center justify-center p-2 rounded-md text-black  hover:[#FFD800] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="bg-white px-2 pt-2 pb-3 text-center space-y-1 sm:px-3 flex flex-col"
              >
                <Link
                  href="/"
                  activeClass="Home"
                  to="/"
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a className="cursor-pointer hover:bg-[#004445] text-[#004445] no-underline hover:text-[#FFD800] block px-3 py-2 rounded-md text-base font-medium">
                    Home
                  </a>
                </Link>
                <Link
                  href="/whoweare"
                  activeClass="about"
                  to="/whoweare"
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a className="cursor-pointer hover:bg-[#004445] text-[#004445] no-underline hover:text-[#FFD800] block px-3 py-2 rounded-md text-base font-medium">
                    Who we are
                  </a>
                </Link>
                <Link
                  href={"/whatwedo"}
                  activeClass="work"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a className="cursor-pointer hover:bg-[#004445] text-[#004445] no-underline hover:text-[#FFD800] block px-3 py-2 rounded-md text-base font-medium">
                    What we do
                  </a>
                </Link>

                <Link
                  href={"/gallery"}
                  activeClass="Services"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a className="cursor-pointer hover:bg-[#004445] text-[#004445] no-underline hover:text-[#FFD800] block px-3 py-2 rounded-md text-base font-medium">
                    Gallery
                  </a>
                </Link>

                <Link
                  href={"/contactus"}
                  activeClass="about"
                  to="about"
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a className="cursor-pointer hover:bg-[#004445] text-[#004445] no-underline hover:text-[#FFD800] block px-3 py-2 rounded-md text-base font-medium">
                    Contact Us
                  </a>
                </Link>

                <Link
                  href={"/donate"}
                  activeClass="contact"
                  to="contact"
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a className="cursor-pointer bg-[#FFD800] text-[#004445] no-underline hover:text-[#004445] block px-3 py-2 rounded-md text-base font-medium">
                    Donate Now
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
