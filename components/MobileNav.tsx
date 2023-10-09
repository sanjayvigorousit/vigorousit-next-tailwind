import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown, MdMenuOpen, MdMenu, MdMiscellaneousServices, MdDonutLarge } from "react-icons/md";
import { RiBitCoinLine, RiPhoneLockLine, } from "react-icons/ri";
import { BiGame, } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { BsDot } from "react-icons/bs";
import { FiHome } from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
const Services = [
  { num: "1", name: "Sports Betting Development", url: "/sports-betting-development" },
  { num: "2", name: "Cricket Betting Development", url: "/cricket-betting-development" },
  { num: "3", name: "Soccer Betting Development", url: "/soccer-betting-development" },
  { num: "4", name: "Kabaddi Betting Development", url: "/kabaddi-betting-development" },
];
export default function MobileNav() {
  const [showNav, setShowNav] = useState(0);
  const [menu] = useState(false);
  function toggleSlideover() {
    document.getElementById("slideover-container").classList.toggle("invisible");
    document.getElementById("slideover-bg").classList.toggle("opacity-0");
    document.getElementById("slideover-bg").classList.toggle("opacity-50");
    document.getElementById("slideover").classList.toggle("translate-x-full");
  }
  return (
    <div className="sticky top-0 z-20 bg-transparent ">
      <nav className="z-20 flex items-center justify-between w-full px-4 py-0 mx-auto 2xl:w-9/12 xl:w-10/12 lg:w-11/12 md:px-0 ">
        <div className="flex items-center flex-shrink-0 text-white ">
          <Link passHref={true} href="/" className="relative">
            <img
              src="/images/Logo.webp"
              alt="Vigorous-logo"
              width={244}
              height={51}
            // priority
            />
          </Link>
        </div>
        <div
          onClick={() => toggleSlideover()}
          className="flex items-center p-2 m-2 my-4 rounded cursor-pointer bg-slate-100 text-slate-600 xl:hidden"
        >
          {menu ? <MdMenuOpen size={26} /> : <MdMenu size={26} />}
        </div>
        <div
          id="slideover-container"
          className="fixed inset-0 invisible w-full h-full"
        >
          <span
            onClick={() => toggleSlideover()}
            id="slideover-bg"
            className="absolute inset-0 w-full h-full transition-all duration-500 ease-out bg-gray-900 "
          ></span>
          <div
            id="slideover"
            className="md:w-96 w-80 bg-[#00b7af]  h-full absolute right-0 duration-300 ease-out transition-all translate-x-full overflow-scroll"
          >
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-2 bg-transparent">
              <div className="text-[#FFFFFF] text-lg font-semibold">
                Menu
              </div>
              <span
                onClick={() => toggleSlideover()}
                className="p-2 rounded-full bg-slate-100/20"
              >
                <VscChromeClose size={24} className="text-white" />
              </span>
            </div>
            <div className="font-medium text-white divide-y divide-white/10">
              <div>
                <Link
                  onClick={() => toggleSlideover()}
                  href="/"
                  passHref={true}
                >
                  {" "}
                  <div className="flex justify-start p-3 px-6 space-x-2 hover:bg-white/10">
                    <FiHome className="text-[#fff]" size={22} />
                    <span>Home</span>
                  </div>
                </Link>
              </div>
              <div>
                <Link
                  onClick={() => toggleSlideover()}
                  href="/about-us"
                  passHref={true}
                >
                  {" "}
                  <div className="flex justify-start p-3 px-6 space-x-2 hover:bg-white/10">
                    <MdDonutLarge className="text-[#fff]" size={22} />
                    <span>About Us</span>
                  </div>
                </Link>
              </div>
              <div>
                <div
                  onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                  className={
                    showNav === 1
                      ? "flex justify-between p-3 items-center px-6 bg-white/10"
                      : "flex justify-between p-3 items-center px-6 bg-transparent "
                  }
                >
                  <div className="flex items-center space-x-2 ">
                    <MdMiscellaneousServices className="text-[#fff]" size={22} />
                    <span>Service</span>
                  </div>
                  <MdKeyboardArrowDown size={30} className={showNav === 1 ? "rotate-180" : "rotate-0"} />
                </div>
                <div
                  className={`bg-transparent  text-white font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 1 ? "max-h-full" : "max-h-0"
                    } `}
                >
                  <ul className="grid grid-cols-1 gap-2 p-4">
                    <div className="p-2 space-y-2 text-sm font-medium">
                      {Services.map((elem: any) => {
                        const { name, num, url } = elem;
                        return (
                          <li key={num} className="  py-1.5 text-white whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                            <Link onClick={() => setShowNav(showNav === 1 ? 0 : 1)} href={url} passHref={true} >
                              {" "}
                              {name}
                            </Link>
                          </li>);
                      })}
                    </div>
                  </ul>
                </div>
              </div>
              <div>
                <Link
                  onClick={() => toggleSlideover()}
                  href="/contact-us"
                  passHref={true}
                >
                  {" "}
                  <div className="flex justify-start p-3 px-6 space-x-2 hover:bg-white/10">
                    <RiPhoneLockLine className="text-[#fff]" size={22} />
                    <span>Contact Us</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
