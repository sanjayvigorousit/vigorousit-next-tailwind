import Link from "next/link";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { useRef, useState } from "react";
import React from "react";
import Head from "next/head";
import dynamic from 'next/dynamic'
import { BsArrowRight, BsArrowUpRight, BsCollectionPlay, BsDot } from "react-icons/bs";
import { MdOutlineInsertInvitation } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})



const WhyChoose = [
  {
    num: "1",
    title: "Unparalleled Expertise",
    decs: "Our team is a powerhouse of skilled professionals with retaining years of experience under our belt, each specializing in their respective domains of sports app and web development."
  },
  {
    num: "2",
    title: "Innovative Solutions",
    decs: "Innovation is the cornerstone of our approach. Our DNA is set on staying ahead of trends, exploring emerging technologies, and delivering solutions that set new industry standards."
  },
  {
    num: "3",
    title: "Tailored to Perfection",
    decs: "We understand that your business is unique. We listen, we discuss, and we bring our expertise to the table, weaving your aspirations into every line of code and pixel of design."
  },
  {
    num: "4",
    title: "Holistic Approach",
    decs: "From ideation to execution, we offer an all-inclusive package of services. Whether it's mobile app development or sports web solutions that captivate users across various platforms."
  },
  {
    num: "5",
    title: "Results That Matter",
    decs: "Our Sports App solutions aren't just about aesthetics; they're about results. We're committed to delivering sports mobile applications that impact your bottom line."
  },
  {
    num: "6",
    title: "Transparent Communication",
    decs: "We believe in open and transparent communication. Throughout the development process, you'll have a clear view of progress, milestones, and potential roadblocks."
  },
  {
    num: "7",
    title: "Proven Track Record",
    decs: "Our success stories aren't just anecdotes; they're testaments to our capabilities. We're consistently delivering sports website solutions to global clients that increase user engagement."
  },
  {
    num: "8",
    title: "Your Success, Our Priority",
    decs: "At Vigorous IT Solutions, your success is our ultimate goal. We're not just here to build apps and websites; we're here to build a bridge between your vision and reality."
  },


];
const SliderData = [
  {
    num: "1",
    title: "Fitness App Development",
  },
  {
    num: "2",
    title: "Online Sports Ticket Booking App Development",
  },
  {
    num: "3",
    title: "Sports Live Streaming App Development",
  },
  {
    num: "4",
    title: "Fantasy Sports App Development",
  },
  {
    num: "5",
    title: "Sports Training and Coaching App Development",
  },
  {
    num: "6",
    title: "VR Powered Sports Specific Game Development",
  },
  {
    num: "7",
    title: "Sports Betting App Development",
  },

];
const Clients = [
  {
    num: "1",
    img: "/images/comfygen.webp",
    alt: "Comfygen"
  },
  {
    num: "2",
    img: "/images/masterbook11.webp",
    alt: "masterbook11"
  },
  {
    num: "3",
    img: "/images/parth-infotech.webp",
    alt: "parth-infotech"
  },
  {
    num: "4",
    img: "/images/einfotech.webp",
    alt: "einfotech"
  },
  {
    num: "5",
    img: "/images/distilinfo.webp",
    alt: "distilinfo"
  },


];
const BettingSolution = [
  {
    num: "1",
    title: "Sports Betting Development",
    img: "/images/webapp1.webp",
  },
  {
    num: "2",
    title: "Cricket Betting Development",
    img: "/images/webappdevelopment.webp",
  },
  {
    num: "3",
    title: "Soccer Betting Development",
    img: "/images/webapp.webp",
  },
  {
    num: "4",
    title: "Kabbadi Betting Development",
    img: "/images/Kabaddi.webp",
  },

];
const Services = [
  {
    num: "1",
    btn: "Learn More",
    icon: <BsCollectionPlay className="text-[#1d1068] group-hover:text-white" size={60} />,
    title: "Sports Mobile App Development",
    decs: "Crafting feature-rich sports mobile applications ensuring seamless services to various clients in the sports league industry.    ",
  },
  {
    num: "2",
    btn: "Learn More",
    icon: <BsCollectionPlay className="text-[#1d1068] group-hover:text-white" size={60} />,
    title: "Sports Website Development  ",
    decs: "Building sports websites with responsive front-end and dynamic back-end that captivate users across various devices.",
  },
  {
    num: "3",
    btn: "Learn More",
    icon: <MdOutlineInsertInvitation className="text-[#1d1068] group-hover:text-white" size={60} />,
    title: "Sports Software Platforms",
    decs: "Tailoring custom sports software solutions to address specific business needs and challenges to achieve unique objectives.",
  },

];

const Solution = [
  {
    num: "1",
    btn: "Learn More",
    icon: <BsCollectionPlay className="text-[#1d1068] group-hover:text-white" size={60} />,
    title: "Cross-Platform",
    decs: "Developing best in class cross-platform sports applications for diverse operating systems like iOS and Android platforms, microsoft windows, Linux, macOS, etc.    ",
  },
  {
    num: "2",
    btn: "Learn More",
    icon: <BsCollectionPlay className="text-[#1d1068] group-hover:text-white" size={60} />,
    title: "UI/UX Design  ",
    decs: "Creating spectacular interfaces and user-centric designs that intensify the overall user experience of sports fanatics.",
  },
  {
    num: "3",
    btn: "Learn More",
    icon: <MdOutlineInsertInvitation className="text-[#1d1068] group-hover:text-white" size={60} />,
    title: "Sports Management Software",
    decs: "Customizing your sports management app for sports league, sports team, sports organizations to improve fan engagement.",
  },

];
const Technologies = [
  {
    num: "1",
    btn: "Learn More",
    icon: <BsCollectionPlay className="text-[#1d1068] group-hover:text-white" size={60} />,
    title: "Sports API",
    decs: "Providing inclusive Sports APIs to empower our clients to make them stay up-to-date with the latest sports information and industry trends.    ",
  },
  {
    num: "2",
    btn: "Learn More",
    icon: <BsCollectionPlay className="text-[#1d1068] group-hover:text-white" size={60} />,
    title: "Digital Marketing Integration",
    decs: "Our digital marketing integration services combine sports website SEO, social media integration, and analytics setup to enhance your online visibility and user engagement.",
  },


];

const ApiSolution = [
  {
    num: '01',
    icon: <BsArrowUpRight className="text-white" />,
    title: 'API-FOOTBALL API',
  },
  {
    num: '02',
    icon: <BsArrowUpRight className="text-white" />,
    title: 'SportScore API',
  },
  {
    num: '03',
    icon: <BsArrowUpRight className="text-white" />,
    title: 'BetsAPI',
  },
  {
    num: '04',
    icon: <BsArrowUpRight className="text-white" />,
    title: 'Pinnacle Odds API',
  },
  {
    num: '05',
    icon: <BsArrowUpRight className="text-white" />,
    title: 'FlashLive Sports API',
  },
  {
    num: '06',
    icon: <BsArrowUpRight className="text-white" />,
    title: 'API-NBA API',
  },
  {
    num: '07',
    icon: <BsArrowUpRight className="text-white" />,
    title: 'The Rundown API',
  },
  {
    num: '08',
    icon: <BsArrowUpRight className="text-white" />,
    title: 'Football Prediction API',
  },
  {
    num: '09',
    icon: <BsArrowUpRight className="text-white" />,
    title: 'Live Sports Odds API',
  },
  {
    num: '10',
    icon: <BsArrowUpRight className="text-white" />,
    title: 'Soccer - Sports Open Data API',
  },
]



const BlockchainStack = [
  { img: "/images/icon/android.svg", alt: 'Binance', title: "Binance", url: "#", num: "1" },
  { img: "/images/icon/android.svg", alt: 'Coinbase', title: "coinbase", url: "#", num: "2" },
  { img: "/images/icon/android.svg", alt: 'Ethereum', title: "Ethereum", url: "/ethereum-token-development", num: "3" },
  { img: "/images/icon/android.svg", alt: 'Ethersjs', title: "Ethers JS", url: "#", num: "4" },
  { img: "/images/icon/android.svg", alt: 'Walletconnect', title: "walletconnect", url: "#", num: "5", },
  { img: "/images/icon/android.svg", alt: 'Trust Wallet', title: "trust wallet ", url: "#", num: "6" },
  { img: "/images/icon/android.svg", alt: 'Solona', title: "Solana", url: "/solana-token-development", num: "7" },
  { img: "/images/icon/android.svg", alt: 'Polygon', title: "Polygon", url: "/polygon-blockchain-development", num: "8" },
];
const FrontendStack = [
  { img: "/images/icon/android.svg", alt: 'Html5', title: "html5", url: "#", num: "1" },
  { img: "/images/icon/android.svg", alt: 'Css3', title: "css3", url: "#", num: "2" },
  { img: "/images/icon/android.svg", alt: 'Nextjs', title: "nextjs", url: "/next-js-development", num: "3" },
  { img: "/images/icon/android.svg", alt: 'React', title: "react js", url: "react-js-development", num: "4" },
  { img: "/images/icon/android.svg", alt: 'Tailwindcss', title: "tailwindcss", url: "#", num: "5" },
  { img: "/images/icon/android.svg", alt: 'Angularjs', title: "angular js", url: "#", num: "6" },
  { img: "/images/icon/android.svg", alt: 'Javascript', title: "javascript", url: "#", num: "7" },
  { img: "/images/icon/android.svg", alt: 'Nodejs', title: "nodejs", url: "node-js-development", num: "8" },
];
const ProgrammStack = [
  { num: "1", img: "/images/icon/android.svg", url: "#", title: "Unity" },
  { num: "2", img: "/images/icon/android.svg", url: "#", title: "Java", },
  { num: "3", img: "/images/icon/android.svg", url: "#", title: "Three.js", },
  { num: "4", img: "/images/icon/android.svg", url: "#", title: "Unreal ", },
  { num: "5", img: "/images/icon/android.svg", url: "#", title: ".Net", },
  { num: "6", img: "/images/icon/android.svg", url: "#", title: "C++", },
  { num: "7", img: "/images/icon/android.svg", url: "#", title: "C#", },
  { num: "8", img: "/images/icon/android.svg", url: "/python-development", title: "Python", },
];

export default function Home() {
  const slider: any = useRef();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const settingstwo = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,


    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          slidesToScroll: 1
        }
      }
    ]
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,


    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          slidesToScroll: 1
        }
      }
    ]
  };

  const settingsone = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,


    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [tech, setTech] = useState(0);
  const [tech1, setTech1] = useState(0);

  return (
    <>

      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* <meta charset="utf-8" /> */}
        <meta name="language" content="en" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <title>Build a Bright Future with Vigorous IT Solution </title>
        <meta name="description" content="Seeking a workplace that fosters Promoting ongoing learning, nurturing an environment for creative idea generation? Then become a part of the Vigorous IT Solution dynamic team!" />
        <link rel="canonical" href="https://www.vigorousit.com/career" />
        <meta property="og:url" content="https://www.vigorousit.com/career  " />
        <meta property="og:title" content="Build a Bright Future with Vigorous IT Solution " />
        <meta property="og:site_name" content="Vigorous IT Solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Seeking a workplace that fosters Promoting ongoing learning, nurturing an environment for creative idea generation? Then become a part of the Vigorous IT Solution dynamic team!" />
        <meta property="og:image" content="https://www.vigorousit.com/logo/Vigorous-logo.webp" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="“@vigorousit" />
        <meta property="twitter:url" content="https://www.vigorousit.com/career " />
        <meta property="twitter:title" content="Build a Bright Future with Vigorous IT Solution " />
        <meta property="twitter:description" content="Seeking a workplace that fosters Promoting ongoing learning, nurturing an environment for creative idea generation? Then become a part of the Vigorous IT Solution dynamic team!" />
        <meta name="twitter:image" content="https://www.vigorousit.com/logo/Vigorous-logo.webp" />
      </Head>
      <div className="overflow-hidden">
        <div className="bg-end bg-no-repeat bg-cover" style={{ backgroundImage: `url("/images/herobg.png")` }} >
          <Header />
          <div className="w-11/12 py-5 mx-auto space-y-4 md:py-28 2xl:w-9/12 xl:w-5/6">
            <h1 className="text-5xl font-extrabold text-white">Vigorous IT Solutions</h1>
            <h2 className="text-3xl font-extrabold text-white">The Premier</h2>
            <h3 className="text-4xl font-extrabold text-[#1EB7AF]">Fantasy App Development Company</h3>
            <p className="text-2xl font-bold text-white">Elevate Your Digital Presence with our Cutting-Edge <br /> Sports Solutions.</p>
            <div className="flex items-start justify-start py-10 space-x-6">
              <button className="block text-base font-medium  active text-white  bg-[#00b7af] hover:text-[#00b7af]  hover:bg-white hover:border-[#00b7af] hover:border rounded-full px-6 lg:py-4 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Contact Us </button>
            </div>
          </div>
        </div>
        <section className="w-11/12 py-10 mx-auto 2xl:w-9/12 xl:w-5/6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h2 className="text-4xl font-extrabold text-center text-[#1d1068] leading-[3rem]">Our offerings that makes you stand out among the Sports App Development Industry</h2>
            <p className="text-lg font-semibold text-gray-600">We deliver the right mix of experience, creativity and resources to turn your challenges into opportunities.</p>
          </div>

          <div className="py-10">
            <div className="flex items-center justify-start py-2 space-x-8 overflow-x-auto border-b md:justify-center whitespace-nowrap">
              <span
                onClick={() => setTech(tech === 0 ? 0 : 0)}
                className={
                  tech === 0
                    ? " border-b-4 border-b-[#1EB7AF] text-[#1EB7AF] font-bold px-6 py-2 text-xl  capitalize cursor-pointer"
                    : "bg-transparent  text-gray-600  px-6 py-2 text-xl font-bold  capitalize cursor-pointer"
                }
              >
                Services
              </span>
              <span
                onClick={() => setTech(tech === 1 ? 0 : 1)}
                className={
                  tech === 1
                    ? " border-b-4 border-b-[#1EB7AF] text-[#1EB7AF] font-bold px-6 py-2 text-xl  capitalize cursor-pointer"
                    : "bg-transparent text-gray-600   px-6 py-2 text-xl font-bold  capitalize cursor-pointer"
                }
              >
                Solutions
              </span>
              <span
                onClick={() => setTech(tech === 2 ? 0 : 2)}
                className={
                  tech === 2
                    ? " border-b-4 border-b-[#1EB7AF] text-[#1EB7AF] font-bold px-6 py-2 text-xl  capitalize cursor-pointer"
                    : "bg-transparent  text-gray-600   px-6 py-2 text-xl font-bold  capitalize cursor-pointer"
                }
              > Technologies
              </span>
              <span
                onClick={() => setTech(tech === 3 ? 0 : 3)}
                className={
                  tech === 3
                    ? " border-b-4 border-b-[#1EB7AF] text-[#1EB7AF] font-bold px-6 py-2 text-xl  capitalize cursor-pointer"
                    : "bg-transparent  text-gray-600   px-6 py-2 text-xl font-bold  capitalize cursor-pointer"
                }
              > API Solutions
              </span>
            </div>
            <div className="relative grid grid-cols-1 gap-6 pt-16 capitalize lg:grid-cols-3 md:grid-cols-2 divide-x-1 md:gap-10">
              {tech === 0 ? (
                <>
                  {Services.map((elem) => {
                    const { title, icon, decs, num, btn } = elem;
                    return (
                      <div key={num} className="p-14 space-y-4 bg-[#F9F9FB] rounded-[10px] transition-all duration-300 hover:translate-y-2 group hover:bg-[#1EB7AF] h-96">
                        <div className="flex items-center justify-center w-20 h-20">
                          <span>{icon}</span>
                        </div>
                        <h3 className="text-2xl font-extrabold text-[#1d1068] group-hover:text-white transition-all duration-200">
                          {title}
                        </h3>
                        <p className="text-gray-600 break-all transition duration-200 ease-in-out group-hover:text-white">
                          {decs}
                        </p>
                        <div className="flex items-center space-x-3 text-[#1EB7AF] group-hover:text-white text-lg font-bold">
                          <p>{btn}</p>
                          <span><BsArrowUpRight /></span>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : null}

              {tech === 1 ? (
                <>
                  {Solution.map((elem) => {
                    const { title, icon, decs, num, btn } = elem;
                    return (
                      <div key={num} className="p-14 space-y-4 bg-[#F9F9FB] rounded-[10px] transition-all duration-300 hover:translate-y-2 group hover:bg-[#1EB7AF] h-96">
                        <div className="flex items-center justify-center w-20 h-20">
                          <span>{icon}</span>
                        </div>
                        <h3 className="text-2xl font-extrabold text-[#1d1068] group-hover:text-white transition-all duration-200">
                          {title}
                        </h3>
                        <p className="text-gray-600 break-all transition duration-200 ease-in-out group-hover:text-white">
                          {decs}
                        </p>
                        <div className="flex items-center space-x-3 text-[#1EB7AF] group-hover:text-white text-lg font-bold">
                          <p>{btn}</p>
                          <span><BsArrowUpRight /></span>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : null}

              {tech === 2 ? (
                <>
                  {Technologies.map((elem) => {
                    const { title, icon, decs, num, btn } = elem;
                    return (
                      <div key={num} className="p-14 space-y-4 bg-[#F9F9FB] rounded-[10px] transition-all duration-300 hover:translate-y-2 group hover:bg-[#1EB7AF] h-96">
                        <div className="flex items-center justify-center w-20 h-20">
                          <span>{icon}</span>
                        </div>
                        <h3 className="text-xl font-extrabold text-[#1d1068] group-hover:text-white transition-all duration-200">
                          {title}
                        </h3>
                        <p className="text-gray-600 break-all transition duration-200 ease-in-out group-hover:text-white">
                          {decs}
                        </p>
                        <div className="flex items-center space-x-3 text-[#1EB7AF] group-hover:text-white text-lg font-bold">
                          <p>{btn}</p>
                          <span><BsArrowUpRight /></span>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : null}
              {tech === 3 ? (
                <>
                  {ApiSolution.map((elem: any) => {
                    const { title, num, icon } = elem;
                    return (
                      <div key={num}>
                        <div className="flex items-center justify-start p-4 space-x-4 rounded-lg cursor-pointer bg-[#1d1068]">
                          <div className="flex items-center justify-center ">
                            {icon}
                          </div>
                          <h3 className="text-xl font-bold text-white ">
                            {title}
                          </h3>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : null}
            </div>

          </div>
          <div className="lg:flex items-center justify-center lg:space-x-6 space-x-0 lg:space-y-0 space-y-4 py-10">
            <p className="text-2xl font-bold">Need a free consultation for your project?</p>
            <button className="inline-flex  items-center justify-center text-base font-medium  active text-white  bg-[#00b7af] hover:text-[#00b7af]  hover:bg-white hover:border-[#00b7af] hover:border rounded-full px-6 lg:py-4 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Contact Us <span className="px-2"><BsArrowUpRight /></span></button>
          </div>

        </section>
        <section className="bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("/images/soccer-players-action-professional-stadium.jpg")` }}>
          <div className=" bg-[#100C27]/80 py-20 ">
            <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6 md:flex md:space-x-10 md:space-y-0">
              <div className="w-full space-y-8 text-left">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#00b7af] xl:text-xl">
                    About us
                  </h3>
                  <h2 className="xl:text-3xl text-2xl font-bold text-[#fff]">
                    Sports Website Development Company- Revolutionizing the Sports Industry
                  </h2>
                  <p className="text-base text-white ">
                    Welcome to Vigorous IT Solutions, your ultimate destination for top-notch sports mobile app development solutions. With our obsession for sports and expertise in mobile app development, we bring your sporting ideas to life. With a team of highly skilled web and app developers and ingenious designers, we strive to deliver immersive and user-friendly sports mobile app development for fans and sports lovers.
                  </p>
                  <p className="text-base text-white ">
                    We deliver best-in-class sports facility management solutions to global clients whether you are a sports fanatic, a trainer, an athlete, or a team manager. With features like sports live streaming app, event calendars, augmented reality, and ticket booking, web applications for sports teams. No matter what your software needs are, Vigorous has got you covered.
                  </p>
                </div>
                <div className="py-6">
                  <Link href="/about-us" passHref={true}>
                    <button className="inline-flex  items-center justify-center text-base font-medium  active text-white  bg-[#00b7af] hover:text-[#00b7af]  hover:bg-white hover:border-[#00b7af] hover:border rounded-full px-6 lg:py-4 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Our Culture<span className="px-2"><BsArrowUpRight /></span></button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center w-full md:justify-end">
                <Image
                  className="rounded-md"
                  title=" We Developer Product That People Love to Use."
                  alt=" We Developer Product That People Love to Use."
                  src="/images/business.png"
                  height={600}
                  width={600}
                  loader={uploadcareLoader}
                  unoptimized={true} />
              </div>
            </div>
          </div>

        </section>
        <section className="w-11/12 py-20 mx-auto -mt-32 2xl:w-9/12 xl:w-5/6">
          <div className="blur-0  bg-[#00b7af] rounded-2xl capitalize">
            <div className="grid grid-cols-2 gap-10 py-10 lg:grid-cols-4 xl:gap-6 lg:divide-x divide-white/20">

              <div className="space-y-4 text-center capitalize">
                <p className="text-2xl font-bold text-white lg:text-5xl">
                  5 +
                </p>
                <p className="text-[16px] lg:text-xl font-semibold text-white ">
                  Country Served
                </p>
              </div>
              <div className="space-y-4 text-center capitalize">
                <p className="text-2xl font-bold text-white lg:text-5xl">
                  80+
                </p>
                <p className="text-[16px] lg:text-xl font-semibold text-white ">
                  sports development project delivered successfully
                </p>
              </div>
              <div className="space-y-4 text-center capitalize">
                <p className="text-2xl font-bold text-white lg:text-5xl">
                  35+
                </p>
                <p className="text-[16px] lg:text-xl font-semibold text-white ">
                  appy clients globally
                </p>
              </div>
              <div className="space-y-4 text-center capitalize">
                <p className="text-2xl font-bold text-white lg:text-5xl">
                  5+
                </p>
                <p className="text-[16px] lg:text-xl font-semibold text-white ">
                  years sports app development experience
                </p>
              </div>

            </div>
          </div>
        </section>
        <section className="w-11/12 py-10 mx-auto space-y-4 bg-white 2xl:w-9/12 xl:w-5/6 lg:w-11/12">

          <div className="flex flex-col space-y-2">
            <p className="text-xl  font-bold text-[#00b7af] capitalize  ">Vigorous IT</p>
            <h2 className=" text-[#1d1068] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">Your One Stop On-Demand Sports Solution</h2>
            <p>With Vigorous IT, you will get everything right under one roof. Our on-demand sports are designed to be future-proof, flooded with the latest technologies to ensure your digital presence remains relevant and engaging. Explore our on-demand sports solutions that you might be seeking for:</p>
          </div>
          <div className="relative flex items-center justify-center py-10 mx-4 ">
            <Slider ref={(c) => (slider.current = c)}  {...settingstwo} className="flex items-center w-full overflow-hidden ">
              {SliderData.map((elem) => {
                const { title, num } = elem;
                return (
                  <div key={num} className='px-4' >
                    <div className=" space-y-4 relative  rounded-[17px] h-96" style={{ backgroundImage: `url("/images/fitness-app-development.webp")` }}>
                      <div className="bg-gradient-to-t from-teal-500/50  to-indigo-900/80 rounded-[17px] h-full p-6">
                        <div className="absolute flex items-end justify-end bottom-6">
                          <h3 className="text-2xl pt-4   text-[#fff] font-bold group-hover:text-white">
                            {title}
                          </h3>

                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

            </Slider>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <button className="inline-flex  items-center justify-center text-base font-medium  active text-white  bg-[#1d1068] hover:text-[#00b7af]  hover:bg-white hover:border-[#00b7af] hover:border rounded-full px-6 lg:py-4 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">All Solution <span className="px-2"><BsArrowUpRight /></span></button>
            </div>
            <div className="flex items-center space-x-2">
              <div className="">
                <button title="previous" onClick={previous} className="px-5 py-4 text-[#1d1068] hover:text-white transition-all duration-200 bg-[#F0F2FA] hover:bg-[#00b7af]">
                  <BiChevronLeft className='text-[1.4rem]' />
                </button>
              </div>
              <div className="">
                <button title="next" onClick={next} className="px-5 py-4 text-[#1d1068] hover:text-white transition-all duration-200 bg-[#F0F2FA] hover:bg-[#00b7af]">
                  <BiChevronRight className='text-[1.4rem]' />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#F0F2FA]">
          <div className="flex flex-col items-center justify-center w-11/12 py-10 mx-auto space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
            <h2 className="text-2xl font-bold text-[#00b7af] text-center">Need help with a project?</h2>
            <h3 className="text-5xl font-extrabold text-[#1d1068] text-center">Get a Free Consultation</h3>
            <p className="text-xl font-bold text-center text-gray-500">Ready to take the first step towards your innovative sports app? Connect with us today to unveil the potential of your digital endeavor. Our team is excited to discuss your ideas, collaborate on app strategies, and build sports software solutions that go beyond your expectations.</p>
            <div className="flex items-center justify-center py-4 space-x-6">
              <button className="inline-flex  items-center justify-center text-base font-medium  active text-white  bg-[#1d1068] hover:text-[#1d1068]  hover:bg-white hover:border-[#1d1068] hover:border rounded-full px-6 lg:py-4 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Contact Us <span className="px-2"><BsArrowUpRight /></span></button>
              <button className="inline-flex  items-center justify-center text-base font-medium  active text-white  bg-[#00b7af] hover:text-[#1d1068]  hover:bg-white hover:border-[#1d1068] hover:border rounded-full px-6 lg:py-4 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Schedule a call <span className="px-2"><BsArrowUpRight /></span></button>
            </div>
          </div>
        </section>
        <div className="py-4 lg:py-10">
          <section className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 ">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center mx-auto">
                <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-extrabold leading-[2rem] lg:leading-[3rem] text-[#1d1068]">
                  Why Choose Us as Your Ultimate Sports App Development and Web Development Partner?
                </h2>
                <p className="text-base tracking-tight text-justify text-slate-800 md:text-center">
                  In a sea of options, making the right choice for your sports app and web development needs is crucial. We stand out as the best choice for a multitude of reasons, each designed to ensure your success in the digital realm of the sports app development industry.
                </p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {WhyChoose.map((elem) => {
                  const { title, num, decs } = elem;
                  return (
                    <>
                      <div key={num} className="p-6 card group ">
                        <div className="w-14 h-14  rounded-full bg-[#00b7af] group-hover:bg-[#1d1068] flex justify-center items-center">
                          <span className="text-3xl font-extrabold text-white/80 group-hover:text-white">{num}</span>
                        </div>
                        <h4 className="text-xl font-bold text-[#1d1068]">{title}</h4>
                        <p>{decs}</p>
                      </div>
                    </>
                  );
                })}

              </div>
              <div className="flex items-center justify-center space-x-6">
                <p className="text-2xl font-bold">Need a free consultation for your project?</p>
                <button className="inline-flex  items-center justify-center text-base font-medium  active text-white  bg-[#00b7af] hover:text-[#00b7af]  hover:bg-white hover:border-[#00b7af] hover:border rounded-full px-6 lg:py-4 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Contact Us <span className="px-2"><BsArrowUpRight /></span></button>
              </div>
            </div>

          </section>

        </div>
        <section className="bg-[#1d1068]">
          <div className="w-11/12 py-10 mx-auto space-y-2 2xl:w-9/12 xl:w-5/6">
            <h2 className="py-4 text-[#ffffff] xl:text-4xl text-3xl font-extrabold xl:leading-[3rem] capitalize">Our Expertise </h2>
            <div className="items-start w-full py-10 space-y-8 divide-y xl:flex xl:space-y-0 xl:divide-x xl:divide-y-0">
              <div className="flex xl:flex-col flex-row xl:items-start items-center xl:space-y-10  justify-start xl:w-[30%] mx-auto  w-full">
                <span
                  onClick={() => setTech1(tech1 === 0 ? 0 : 0)}
                  className={
                    tech1 === 0
                      ? "xl:border-r-4  text-white px-6 py-2 text-2xl font-bold capitalize cursor-pointer w-full"
                      : "bg-transparent  text-white/80  px-6 py-2 text-2xl font-bold capitalize cursor-pointer w-full"
                  }
                >
                  Mobile
                </span>
                <span
                  onClick={() => setTech1(tech1 === 1 ? 0 : 1)}
                  className={
                    tech1 === 1
                      ? "xl:border-r-4  text-white px-6 py-2 text-2xl font-bold capitalize cursor-pointer w-full"
                      : "bg-transparent  text-white/80  px-6 py-2 text-2xl font-bold capitalize cursor-pointer w-full"
                  }
                >
                  Frontend
                </span>
                <span
                  onClick={() => setTech1(tech1 === 2 ? 0 : 2)}
                  className={
                    tech1 === 2
                      ? "xl:border-r-4  text-white px-6 py-2 text-2xl font-bold capitalize cursor-pointer w-full"
                      : "bg-transparent  text-white/80  px-6 py-2 text-2xl font-bold capitalize cursor-pointer w-full"
                  }
                > Backend
                </span>
              </div>
              <div className="grid xl:grid-cols-7 lg:grid-cols-3 grid-cols-2 divide-x-1 md:gap-6 gap-4 relative capitalize xl:w-[70%] w-full">
                {tech1 === 0 ? (
                  <>
                    {BlockchainStack.map((elem: any) => {
                      const { img, num, title, url, bg } = elem;
                      return (
                        <Link href={url} passHref={true}>
                          <div
                            key={num}
                            className="flex flex-col items-center justify-center py-4 space-y-3 text-center">
                            <div className="flex items-center justify-center w-16 h-16">
                              <Image src={img} alt={title} width={50} height={50} className="transition-all duration-200 transform group-hover:scale-105" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white">
                                {title}
                              </h3>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </>
                ) : null}

                {tech1 === 1 ? (
                  <>
                    {FrontendStack.map((elem: any) => {
                      const { img, title, num, url, bg } = elem;
                      return (
                        <Link href={url} passHref={true}>
                          <div
                            key={num}
                            className="flex flex-col items-center justify-center py-4 space-y-3 text-center">
                            <div className="flex items-center justify-center w-16 h-16">
                              <Image src={img} alt={title} width={50} height={50} className="transition-all duration-200 transform group-hover:scale-105" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white">
                                {title}
                              </h3>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </>
                ) : null}

                {tech1 === 2 ? (
                  <>
                    {ProgrammStack.map((elem: any) => {
                      const { img, num, title, bg, url } = elem;
                      return (
                        <Link href={url} passHref={true}>
                          <div
                            key={num}
                            className="flex flex-col items-center justify-center py-4 space-y-3 text-center">
                            <div className="flex items-center justify-center w-16 h-16">
                              <Image src={img} alt={title} width={50} height={50} className="transition-all duration-200 transform group-hover:scale-105" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white">
                                {title}
                              </h3>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </>
                ) : null}

              </div>
            </div>
          </div>
        </section>

        <div className="w-11/12 py-10 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">

          <h3 className="text-3xl font-extrabold text-[#1d1068] text-center">Featured Projects</h3>
          <p className="text-xl font-bold text-center text-gray-500">We have a proven track record of building high quality solutions for customers all over the world.</p>
          <div className="grid grid-cols-1 py-10 space-x-6 lg:grid-cols-2">
            <div className="flex flex-col justify-center items-center space-y-4 bg-[#E8FED9] p-6 text-center rounded">
              <h2 className="text-3xl font-bold text-black">Jet Fair</h2>
              <Image className="rounded-md " alt="" src="/images/Payemnt.png" width={620} height={333} />
              <p className="text-lg font-semibold text-gray-500">This website is operated by Three Aces Curaçao N.V., registered in Curaçao under the number 155000, with the address at Heelsumstraat 51 Curaçao....</p>
              <button className="inline-flex items-center justify-center text-base font-bold ">More <span className="px-2"><BsArrowUpRight /></span></button>
            </div>
            <div className="flex flex-col justify-center items-center space-y-4 bg-[#FFEDEA] p-6 text-center rounded">
              <h2 className="text-3xl font-bold text-black">Sky Buzz</h2>
              <Image className="rounded-md " alt="" src="/images/skybuzz.png" width={620} height={333} />
              <p className="text-lg font-semibold text-gray-500">This website is operated by Three Aces Curaçao N.V., registered in Curaçao under the number 155000, with the address at Heelsumstraat 51 Curaçao....</p>
              <button className="inline-flex items-center justify-center text-base font-bold ">More <span className="px-2"><BsArrowUpRight /></span></button>
            </div>
          </div>
        </div>

        <section className="w-11/12 py-10 mx-auto space-y-4 bg-white 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <h2 className=" text-[#1d1068] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">Trusted by Awesome Clients</h2>
            <p>Not to brag, but a lot of hot startups and market leaders reach out & touch base to commission our work.</p>
          </div>
          <div className="relative flex items-center justify-center py-10 mx-4 ">
            <Slider ref={(c) => (slider.current = c)}  {...settings} className="flex items-center w-full overflow-hidden ">
              {Clients.map((elem) => {
                const { img, num, alt } = elem;
                return (
                  <div key={num} className='px-4' >
                    <Image src={img} alt={alt} width={400} height={400} />
                  </div>
                );
              })}

            </Slider>
          </div>
        </section >
        <div className=" bg-[#E2FCFB]">
          <section className="flex flex-col-reverse items-start w-11/12 mx-auto space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex-row md:space-x-10 md:space-y-0 ">
            <div className="py-6 space-y-8">
              <div className="space-y-6">
                <button className=" bg-white  border border-[#00b7af] text-[#00b7af] rounded-full py-2 px-6">Modus Operandi</button>
                <h1 className="text-4xl font-extrabold text-[#1d1068]">Our Building Wizardry</h1>
              </div>
              <div className="flex py-6 space-x-6 items-left drop-shadow-2xl">
                <div>
                  <Image
                    src="/images/discovery-stage-icon 1.png"
                    alt="development"
                    className="rounded-lg"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="space-y-4 text-left">
                  <h2 className="text-xl font-bold">Discovery Phase</h2>
                  <div>
                    <p className="text-lg ">This is the initial step where your ideas take shape. We conduct in-depth research, define user personas, and prepare features layout to set the center stage for app brilliance.</p>
                  </div>
                </div>
              </div>
              <div className="flex py-6 space-x-6 items-left drop-shadow-2xl">
                <div>
                  <Image
                    src="/images/development-stage-icon 1.png"
                    alt="development"
                    className="rounded-lg"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="space-y-4 text-left">
                  <h2 className="text-xl font-bold">Development Phase</h2>
                  <div>
                    <p className="text-lg ">Next step where the coding symphony plays. Our expert hands craft lines of code, conduct rigorous testing, and give meticulous attention to detail that brings your vision to life.</p>
                  </div>
                </div>
              </div>
              <div className="flex py-6 space-x-6 items-left drop-shadow-2xl">
                <div>
                  <Image
                    src="/images/continous-development-support-icon 1.png"
                    alt="development"
                    className="rounded-lg"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="space-y-4 text-left">
                  <h2 className="text-xl font-bold">Persistent Support Post-launch</h2>
                  <div>
                    <p className="text-lg ">Our tenacious beyond launch support includes ongoing assistance, updates, and optimizations making sure that your app’s success endures.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full pt-10 lg:justify-end lg:pt-0">
              <Image
                src="/images/image-sample.png"
                alt=""
                className="w-full rounded-lg"
                width={800}
                height={800}
              />
            </div>
          </section>
        </div>
        <section className="w-11/12 py-10 mx-auto space-y-4 bg-white 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <h2 className=" text-[#1d1068] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">End to End Clone Script Betting Solution</h2>
            <p> save your time and cost both, we offer you a readymade and customized on demand Betting solutions to launch in the market</p>
          </div>
          <div className="relative flex items-center justify-center py-10 mx-4 ">
            <Slider ref={(c) => (slider.current = c)}  {...settingsone} className="flex items-center w-full overflow-hidden ">
              {BettingSolution.map((elem) => {
                const { img, num, title } = elem;
                return (
                  <div key={num} className='px-4 space-y-2 text-center' >
                    <Image src={img} alt={title} width={400} height={400} />
                    <p className="text-xl font-bold text-[#1d1068]">{title}</p>
                  </div>
                );
              })}

            </Slider>
          </div>
        </section>
        <section className="bg-gradient-to-b from-[#1B176B] to-[#0E668D] py-20" id="contact">

          <div className="w-11/12 mx-auto space-y-6 2xl:w-9/12 xl:w-5/6 md:flex md:space-x-10 ">
            <div className="space-y-6 md:space-y-10">
              <div className="flex flex-col justify-start space-y-2 text-left">
                <p className='text-2xl font-bold text-[#059BA3] '>Excited?</p>
                <p className="text-2xl font-bold text-white 2xl:text-4xl xl:text-3xl">
                  Let's build or improve your digital product
                </p>
              </div>
              <div>
                <form className=" rounded-xl space-y-5 text-left md:w-[65%] w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                    <div>
                      <input type="text" name="name"
                        placeholder="First Name"
                        className="w-full p-2 font-light border rounded-lg focus:outline-none focus:ring-1 focus:font-normal" />
                    </div>
                    <div>
                      <input type="text" name="name"
                        placeholder="Last Name"
                        className="w-full p-2 font-light border rounded-lg focus:outline-none focus:ring-1 focus:font-normal" />
                    </div>
                    <div>
                      <input type="text" name="email"

                        placeholder="Email"
                        className="focus:outline-none bg-[#F7F7F7] border   p-2 w-full focus:ring-1 rounded-lg font-light focus:font-normal"
                      />

                    </div>
                    <div>
                      <input type="number" name="mobNo"
                        placeholder="Phone number *"
                        className="focus:outline-none bg-[#F7F7F7] border   p-2 w-full focus:ring-1 rounded-lg font-light focus:font-normal" />

                    </div>
                    <div className="md:col-span-2">
                      <input name="subject"
                        placeholder="How did you learn about us ? "
                        className="w-full p-2 font-light border rounded-lg resize-none focus:outline-none focus:ring-1 focus:font-normal"></input>
                    </div>
                    <div className="md:col-span-2">
                      <textarea name="msg"
                        cols={18} rows={4} placeholder="Message "
                        className="w-full p-2 font-light border rounded-lg resize-none focus:outline-none focus:ring-1 focus:font-normal"></textarea>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex mb-2">
                      <div className="flex">
                        <input id="terms" type="checkbox" defaultValue="" className="accent-[#00b7af] w-4 h-4 mt-1 border border-gray-300 rounded-xl bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                      </div>
                      <label htmlFor="terms" className="ml-2 text-base font-medium text-[#ABA5CC]">By submitting this form I consent to processing my personal data as described  in the{" "}  <a href="#" className="text-white hover:underline ">Privacy Policy</a></label>
                    </div>
                    <div className="flex items-center mb-6">
                      <div className="flex items-center">
                        <input id="terms" type="checkbox" defaultValue="" className="accent-[#00b7af] w-4 h-4 border border-gray-300 rounded-xl bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                      </div>
                      <label htmlFor="terms" className="ml-2 text-base font-medium text-[#ABA5CC]">Send me NDA </label>
                    </div>
                  </div>
                  <div className="flex justify-center gap-5 pt-2 2xl:pt-4">
                    <div className="">
                      <button className="block text-base active text-white font-semibold bg-[#00b7af] hover:text-[#00b7af]  hover:bg-white hover:border-[#00b7af] hover:border rounded-full px-6 lg:py-4 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="p-5 lg:p-8 space-y-6 bg-gradient-to-b from-[#115384] to-[#0B7894] text-white rounded-lg md:w-[35%] w-full">
              <div className="flex justify-center item-center">
                <h2 className='text-2xl font-semibold text-center text-white'>We are open to answer you directly</h2>
              </div>
              <div className="flex justify-center item-center">
                <img src="https://www.vigorousit.com/images/Man.webp" alt="" className='object-cover rounded-full w-36 h-36' />
              </div>
              <div className="flex-col justify-center item-center">
                <p className='text-lg font-semibold text-center text-white'>Call for more info</p>
                <p className='text-xl font-semibold text-center text-white'>+91 8209514612</p>
              </div>
              <div className="flex-col justify-center item-center">
                <p className='text-lg font-semibold text-center text-white'>Mail to our sales department</p>
                <p className='text-xl font-semibold text-center text-white'>sales@vigorousit.com</p>
              </div>
              <div className="flex-col justify-center item-center">
                <p className='text-lg font-semibold text-center text-white'>Visit us</p>
                <p className='text-xl font-semibold text-center text-white'>F-160, Dayanand Marg, near DAV Centenary Public School, Nemi Nagar, Vaishali Nagar, Jaipur, Rajasthan 302021</p>
              </div>

              <div className="flex justify-center gap-3 item-center">
                <div className="">
                  <Link href="https://api.whatsapp.com/send?phone=918209514612" passHref={true}>
                    <div className="px-4 py-2 text-lg rounded-full relative inline-flex group items-center justify-center  cursor-pointer bg-[#183176]   hover:bg-gradient-to-r from-[#183176] to-[#049BA3] text-white overflow-hidden">
                      <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                      <span className="relative text-base"> Schedule a call</span>
                      <BsArrowRight className="ml-2 transition-all duration-200 ease-out " />
                    </div>
                  </Link>
                </div>
                <div className="">
                  <Link href="https://api.whatsapp.com/send?phone=918209514612" passHref={true}>
                    <div className="px-4 py-2 text-lg rounded-full relative inline-flex group items-center justify-center  cursor-pointer bg-[#00B7AF]   hover:bg-gradient-to-r from-[#183176] to-[#049BA3] text-white overflow-hidden">
                      <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                      <span className="relative text-base"> For Sales Enquries</span>
                      <BsArrowRight className="ml-2 transition-all duration-200 ease-out " />
                    </div>
                  </Link>
                </div>
              </div>

            </div>
          </div >

        </section>
      </div>

    </>
  );
}