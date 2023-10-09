import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown, MdMenuOpen, MdMenu } from "react-icons/md";
import $ from 'jquery';


const Game = [
  { num: "1", name: "Sports Betting Development", url: "/sports-betting-development" },
  { num: "2", name: "Cricket Betting Development", url: "/cricket-betting-development" },
  { num: "3", name: "Soccer Betting Development", url: "/soccer-betting-development" },
  { num: "4", name: "Kabaddi Betting Development", url: "/kabaddi-betting-development" },
];



export default function DesktopNav(props: any) {
  const [showNav, setShowNav] = useState(0);
  const [menu] = useState(false);
  function toggleSlideover() {
    document
      .getElementById("slideover-container")
      .classList.toggle("invisible");
    document.getElementById("slideover-bg").classList.toggle("opacity-0");
    document.getElementById("slideover-bg").classList.toggle("opacity-50");
    document.getElementById("slideover").classList.toggle("translate-x-full");
  }

  useEffect(() => {
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('.headered').addClass('active');
      } else {
        $('.headered').removeClass('active');
      }
    });
  }, []);


  return (
    <div className="w-full headered">
      <nav className="z-20 flex items-center justify-between w-full px-4 py-0 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:px-0 ">
        <Link passHref={true} href="/" className="relative flex items-center flex-shrink-0 text-white">
          <img src="/images/Logo.webp" alt="vigorous-logo" width={244} height={51} />
          {/* <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#a879df] to-[#631549] ">VIGOROUS IT SOLUTION</p> */}
        </Link>
        <div
          onClick={() => toggleSlideover()}
          className="flex items-center p-2 m-2 my-4 rounded cursor-pointer bg-slate-100 text-slate-600 xl:hidden" >
          {menu ? <MdMenuOpen size={26} /> : <MdMenu size={26} />}
        </div>
        <div
          className={
            "xl:flex hidden  xl:w-auto w-full items-center text-white px-6 "}>
          <div className="block space-x-4 text-sm font-medium 2xl:space-x-10 lg:flex lg:items-center lg:space-y-0 lg:p-0">
            <Link href="/" passHref={true}>
              <span className="relative block text-lg font-semibold leading-none transition duration-300 border-b-2 border-transparent cursor-pointer py-9 hover:text-white/100 text-white/80 ">
                Home
              </span>
            </Link>
            <Link href="/about-us" passHref={true}>
              <span className="relative block text-lg font-semibold leading-none transition duration-300 border-b-2 border-transparent cursor-pointer py-9 hover:text-white/100 text-white/80 ">
                About Us
              </span>
            </Link>

            <div className="relative group ">
              <button
                onClick={() => setShowNav(showNav === 3 ? 0 : 3)}
                className="inline-flex items-center py-8 text-lg font-semibold border-b-2 border-transparent text-white/80 hover:text-white/100" >
                <span
                  className={
                    showNav === 3
                      ? "  font-medium text-white/80"
                      : " font-medium "}>
                  Service
                </span>
                <MdKeyboardArrowDown className="text-white/80" size={18} />
              </button>
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative -right-28 transform hidden group-hover:block transition duration-200 ease-in-out origin-top w-[20rem] ">
                <div className="absolute -top-2 2xl:inset-x-[10rem] xl:inset-x-[10rem] bg-white rotate-45 w-4 h-4"></div>
                {/* <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative -right-72 transform hidden group-hover:block   transition duration-200 ease-in-out origin-top  w-[60rem] ">
                <div className="absolute -top-2 2xl:inset-x-[39rem] xl:inset-x-[39rem] bg-white rotate-45 w-4 h-4"></div> */}
                <div className="p-10 mx-auto text-sm">
                  <div className="grid grid-cols-2 gap-10">
                    <div>
                      <p className="pb-4 text-lg font-semibold text-black border-b">
                        Game Development
                      </p>
                      <ul className="space-y-2 text-sm font-medium">
                        {Game.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className=" py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                            >
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 2 ? 0 : 2)
                                }
                                href={url}
                                passHref={true}
                              >
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    {/* <div>
                      <p className="pb-4 text-lg font-semibold text-black border-b">
                        Betting Game App Development
                      </p>
                      <ul className="space-y-2 text-sm font-medium">
                        {Betting.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className="  py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 " >
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 2 ? 0 : 2)
                                }
                                href={url}
                                passHref={true}>
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div> */}


                  </div>
                </div>
              </div>
            </div>

            <Link href="/career" passHref={true}>
              <span className="relative block text-lg font-semibold leading-none transition duration-300 border-b-2 border-transparent cursor-pointer py-9 hover:text-white/100 text-white/80 ">
                Career
              </span>
            </Link>
            <Link href="/contact-us" passHref={true}>
              <span className="relative block text-lg font-semibold leading-none transition duration-300 border-b-2 border-transparent cursor-pointer py-9 hover:text-white/100 text-white/80 ">
                Contact Us
              </span>
            </Link>




            {/* <div className="relative group ">
              <button
                onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                className="inline-flex items-center py-8 text-base border-b-2 border-transparent text-white/80 hover:text-white/100">
                <span
                  className={
                    showNav === 1
                      ? "font-medium text-white/80"
                      : " font-medium "
                  }>
                  Development
                </span>
                <MdKeyboardArrowDown className="text-white/80" size={18} />
              </button>
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative  -left-72 transform hidden group-hover:block   transition duration-200 ease-in-out origin-top w-[60rem]">
                <div className="absolute -top-2 2xl:inset-x-[21rem] xl:inset-x-[20rem] bg-white rotate-45   w-4 h-4"></div>
                <div className="p-10 mx-auto text-sm">
                  <div className="grid grid-cols-3 gap-10">
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Mobile App Development
                      </p>
                      <ul className="space-y-2 text-sm font-medium">
                        {MobileApp.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className="py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 " >
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 1 ? 0 : 1)
                                }
                                href={url}
                                passHref={true}
                              >
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Web Development
                      </p>
                      <ul className="space-y-2 text-sm font-medium">
                        {WebApp.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className="py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 1 ? 0 : 1)
                                }
                                href={url}
                                passHref={true} >
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Stack Development
                      </p>
                      <ul className="space-y-2 text-sm font-medium">
                        {Stack.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className="  py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                            >
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 1 ? 0 : 1)
                                }
                                href={url}
                                passHref={true}
                              >
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group ">
              <button
                onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                className="inline-flex items-center py-8 text-base border-b-2 border-transparent text-white/80 hover:text-white/100" >
                <span
                  className={
                    showNav === 2
                      ? "  font-medium text-white/80"
                      : " font-medium "}>
                  Blockchain & Token
                </span>
                <MdKeyboardArrowDown className="text-white/80" size={18} />
              </button>
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize    text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative -right-72 transform hidden group-hover:block   transition duration-200 ease-in-out origin-top  w-[60rem] ">
                <div className="absolute -top-2 2xl:inset-x-[35rem] xl:inset-x-[34rem]   bg-white rotate-45   w-4 h-4"></div>
                <div className="p-10 mx-auto text-sm">
                  <div className="grid grid-cols-3 gap-10">
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Blockchain Development
                      </p>
                      <ul className="space-y-2 text-sm font-medium">
                        {Blockchain.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className=" py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                            >
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 2 ? 0 : 2)
                                }
                                href={url}
                                passHref={true}
                              >
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Token Development
                      </p>
                      <ul className="space-y-2 text-sm font-medium">
                        {Token.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className="  py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 " >
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 2 ? 0 : 2)
                                }
                                href={url}
                                passHref={true}>
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Other Development
                      </p>
                      <ul className="space-y-2 text-sm font-medium">
                        {Other.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className="  py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "  >
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 2 ? 0 : 2)
                                }
                                href={url}
                                passHref={true} >
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group ">
              <button
                onClick={() => setShowNav(showNav === 3 ? 0 : 3)}
                className="inline-flex items-center py-8 text-base border-b-2 border-transparent text-white/80 hover:text-white/100" >
                <span
                  className={
                    showNav === 3
                      ? "  font-medium text-white/80"
                      : " font-medium "}>
                  Game
                </span>
                <MdKeyboardArrowDown className="text-white/80" size={18} />
              </button>
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize    text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative -right-72 transform hidden group-hover:block   transition duration-200 ease-in-out origin-top  w-[60rem] ">
                <div className="absolute -top-2 2xl:inset-x-[39rem] xl:inset-x-[39rem]   bg-white rotate-45   w-4 h-4"></div>
                <div className="p-10 mx-auto text-sm">
                  <div className="grid grid-cols-3 gap-10">
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Game Development
                      </p>
                      <ul className="space-y-2 text-sm font-medium">
                        {Game.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className=" py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                            >
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 2 ? 0 : 2)
                                }
                                href={url}
                                passHref={true}
                              >
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Betting Game App Development
                      </p>
                      <ul className="space-y-2 text-sm font-medium">
                        {Betting.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className="  py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 " >
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 2 ? 0 : 2)
                                }
                                href={url}
                                passHref={true}>
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Game API Development
                      </p>
                      <ul className="space-y-2 text-sm font-medium">
                        {GameApi.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className="  py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 " >
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 2 ? 0 : 2)
                                }
                                href={url}
                                passHref={true}>
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="group ">
              <button
                onClick={() => setShowNav(showNav === 4 ? 0 : 4)}
                className="inline-flex items-center py-8 text-base border-b-2 border-transparent text-white/80 hover:text-white/100" >
                <span
                  className={
                    showNav === 3
                      ? " font-medium text-white/80"
                      : " font-medium "} >
                  Company
                </span>
                <MdKeyboardArrowDown className="text-white/80" size={18} />
              </button>
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize  text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative  2xl:right-80 xl:right-60 transform hidden group-hover:block   transition duration-200 ease-in-out origin-top ">
                <div className="absolute -top-2 2xl:inset-x-[4rem] xl:inset-x-[5rem]   bg-white rotate-45  w-4 h-4"> {" "}
                </div>
                <div className="p-10 mx-auto text-sm">
                  <div className="grid grid-cols-1 gap-10">
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Our Company
                      </p>
                      <ul className="space-y-2 text-sm font-medium">
                        {Company.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className=" py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 " >
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 4 ? 0 : 4)
                                }
                                href={url}
                                passHref={true} >
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/quote" passHref={true}>
              <span className="block text-base font-medium  active text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded-full px-6 lg:py-3 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative">
                Get a Quote
              </span>
            </Link> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
