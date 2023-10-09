import Head from 'next/head';
import dynamic from "next/dynamic";
import Link from 'next/link';
import Image from "next/image";
import { BsArrowRight, BsCheck2All, BsDot } from "react-icons/bs";
import { useState, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronDown } from 'react-icons/bi';

const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})


const BettingSolution = [

  {
    num: "1",
    title: "Casino Betting App Development",
    img: "/images/white-label-sports-app-software-solution.webp",
  },
  {
    num: "2",
    title: "Soccer Betting App Development",
    img: "/images/custom-sports-betting-app-development.webp",
  },
  {
    num: "3",
    title: "Tennis Betting App Development",
    img: "/images/white-label-sports-app-software-solution.webp",
  },
  {
    num: "4",
    title: "Horse Betting App Development",
    img: "/images/custom-sports-betting-app-development.webp",
  },

];

const BettingServices = [
  {
    num: "1",
    bgcolor: "#FFFFFF",
    icon: "/images/sports-betting-app-consultation.svg",
    title: "Cricket Betting App Consultation",
    decs: "If you want to turn your app into a boundary-hitting sensation, get expert guidance and insights for your app’s success with our betting app consultation services.",
  },
  {
    num: "2",
    bgcolor: "#FFFFFF",
    icon: "/images/blockchain-based-sports-betting-website-development.svg",
    title: "Cricket Betting App Development ",
    decs: "We craft exhilarating experiences through our betting apps catering to a wide range of platforms including iOS, Android, and Cross-platform ensuring your application reaches a broader audience.",
  },
  {
    num: "3",
    bgcolor: "#FFFFFF",
    icon: "/images/user-interface-design.svg",
    title: "Cricket Betting Software Development",
    decs: "With a team of sports experts, we craft enticing softwares offering real-time match updates, odds calculation, secure payment gateways, and other features that keeps fans engaged and profit soaring.",
  },
  {
    num: "4",
    bgcolor: "#FFFFFF",
    icon: "/images/sports-betting-app-development.svg",
    title: "Cricket Betting Website Development    ",
    decs: "By covering every facet of website development, we develop stunning, user-centric cricket betting websites for diverse web platforms that cater to the needs of avid cricket enthusiasts and punters.",
  },
  {
    num: "5",
    bgcolor: "#FFFFFF",
    icon: "/images/platform-compatibility.svg",
    title: "Front-End & Back-End Development",
    decs: "Our passionate team brings the pitch to your fingertips with visually appealing design and all-inclusive robust mobile app development service that captures the heart of every cricket fan.",
  },
  {
    num: "6",
    bgcolor: "#FFFFFF",
    icon: "/images/maintenance-and-support.svg",
    title: "Odds & Live Match Integration Service",
    decs: "Through our live match and odds integration providing live match scores & real-time odds data we deliver the thrill of a cricket stadium experience right on your mobile screen.",
  },
]

const Frequently = [
  {
    num: "1",
    title: "Items #1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in felis dignissim, imperdiet nulla vitae, condimentum nulla. Ut scelerisque a nisl sit amet facilisis. Etiam blandit iaculis tellus, vitae condimentum leo congue a. Vivamus in vehicula massa. Pellentesque libero libero, commodo lacinia volutpat non, tincidunt at lectus. Maecenas ipsum turpis, viverra vitae lacus eu, fringilla ultricies erat. Aenean hendrerit maximus sodales.",
  },
  {
    num: "2",
    title: "Items #2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in felis dignissim, imperdiet nulla vitae, condimentum nulla. Ut scelerisque a nisl sit amet facilisis. Etiam blandit iaculis tellus, vitae condimentum leo congue a. Vivamus in vehicula massa. Pellentesque libero libero, commodo lacinia volutpat non, tincidunt at lectus. Maecenas ipsum turpis, viverra vitae lacus eu, fringilla ultricies erat. Aenean hendrerit maximus sodales.",
  },
  {
    num: "3",
    title: "Items #3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in felis dignissim, imperdiet nulla vitae, condimentum nulla. Ut scelerisque a nisl sit amet facilisis. Etiam blandit iaculis tellus, vitae condimentum leo congue a. Vivamus in vehicula massa. Pellentesque libero libero, commodo lacinia volutpat non, tincidunt at lectus. Maecenas ipsum turpis, viverra vitae lacus eu, fringilla ultricies erat. Aenean hendrerit maximus sodales.",
  },
];

export default function contactus() {
  const [tech, setTech] = useState(0);
  const [admin, setAdmin] = useState(0);
  const [currentCount, setCurrentCount] = useState("");

  const slider: any = useRef();
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

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="language" content="en" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <title>Discover our Vision and Mission: Vigorous IT Solutions  </title>
        <meta name="description" content="Vigorous IT Solutions is the Best Sports App Development Company. Learn how we provide you innovative and exceptional sports app development services." />
        <link rel="canonical" href="https://www.vigorousit.com/about-us" />
        <meta property="og:url" content="https://www.vigorousit.com/about-us  " />
        <meta property="og:title" content="Discover our Vision and Mission: Vigorous IT Solutions  " />
        <meta property="og:site_name" content="Vigorous IT Solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Vigorous IT Solutions is the Best Sports App Development Company. Learn how we provide you innovative and exceptional sports app development services." />
        <meta property="og:image" content="https://www.vigorousit.com/logo/Vigorous-logo.webp" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="“@vigorousit" />
        <meta property="twitter:url" content="https://www.vigorousit.com/about-us " />
        <meta property="twitter:title" content="Discover our Vision and Mission: Vigorous IT Solutions  " />
        <meta property="twitter:description" content="Vigorous IT Solutions is the Best Sports App Development Company. Learn how we provide you innovative and exceptional sports app development services." />
        <meta name="twitter:image" content="https://www.vigorousit.com/logo/Vigorous-logo.webp" />
      </Head>



      <div className="overflow-hidden">

        <div className="bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("/images/sports-betting-app-development-company.webp")` }} >
          <Header />
          <div className="w-11/12 py-5 mx-auto space-y-4 md:py-28 2xl:w-9/12 xl:w-5/6">
            <h1 className="text-5xl font-extrabold text-center text-white">Your Leading Cricket Betting App Development Company</h1>
            <h2 className="py-3 text-3xl font-bold text-center text-white">Paramount Partner for IPL Cricket Betting App Development Excellence</h2>
            <p className="text-2xl font-medium text-center text-white">Are you a cricket buff who also happens to be a sports betting enthusiast? If so, you’re in luck because we’re the premier choice for crafting enticing Cricket Betting Apps That Score Big! Elevate your betting experience with our elite betting app solutions, unrivalled expertise, and a zeal for creativity by choosing us as your digital partner.</p>
            <h3 className="text-3xl font-bold text-center text-white">Fueling Your Winning Streak</h3>
            <div className="flex items-center justify-center py-10 space-x-6">
              <button className="block text-base active text-white font-semibold bg-[#00b7af] hover:text-[#00b7af]  hover:bg-white hover:border-[#00b7af] hover:border rounded-full px-6 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Schedule a call</button>
            </div>
          </div>
        </div>

        <section className="bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("/images/gradients-background.webp")` }} >
          <div className="items-center w-11/12 py-10 mx-auto space-x-0 space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex lg:space-x-10 md:space-y-0 lg:py-20">
            <div className="w-full lg:w-1/2">
              <div className="w-full space-y-6 text-left">
                <h2 className="py-3 text-4xl font-extrabold text-[#222569]">Pioneers in Cricket Betting App Development: Get to Know Us</h2>
                <p className="text-lg font-semibold text-gray-600">Welcome to Vigorous IT Solutions, where we’re revamping the future of cricket betting. We specialize in delivering our clients the finest quality betting applications with an emphasis on user experience and exciting features.</p>
                <p className="text-lg font-semibold text-gray-600">With years of experience under our belt, we acquire peerless knowledge that help us to craft your custom betting software from scratch. We understand the unique prerequisite and technicalities of the industry, offering a seamless user experience by providing accurate scorekeeping and real-time insights.</p>
                <p className="text-lg font-semibold text-gray-600">Our betting app developers tend to use the cutting-edge technologies that enhance the overall functionality, scalability, and security of betting software. This helps us to be the frontrunner and foster customer loyalty through a flawless, user-centric experience.</p>
                <p className="text-lg font-semibold text-gray-600">Today, we stand as betting industry leaders, known for resolute pursuit of the highest quality in sports betting app development. We have a holistic understanding of the betting and gambling regulations and guidelines that are specific to the target countries.</p>
                <h3 className="text-3xl font-bold text-gray-600">Join us today and sail for success in the realm of cricket betting!!</h3>
              </div>
            </div>
            <div className="flex justify-center w-full pb-10 2xl:justify-start lg:w-1/2 lg:pb-0">
              <Image className="rounded-md" alt="" src="/images/pioneers-cricket-app.webp" width={800} height={1000} />
            </div>
          </div>
        </section>
        <section className='bg-[#f0f2f499] py-16'>
          <div className='w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12'>
            <div className='space-y-4'>
              <h2 className="py-2 md:text-4xl text-3xl md:font-extrabold md:leading-[3rem] text-[#1d1068] text-center">Hit a Six with Our Winning Cricket Betting App Development Services</h2>
              <p className='text-lg font-semibold text-center text-gray-600'>With Vigorous IT Solutions, you call the shots, and we execute your winning strategy, making your cricket betting mobile app an outshine player in the betting industry.</p>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3">
              {BettingServices.map((elem) => {
                const { title, icon, decs } = elem;
                return (
                  <>
                    <div className="p-6 mt-20 space-y-4 rounded-lg hover:shadow-lg" style={{ backgroundColor: elem.bgcolor }}>
                      <div className="flex items-center justify-center">
                        <img src={icon} alt={title} className="-mt-20 w-28 h-28" />
                      </div>
                      <h2 className="text-xl text-center font-extrabold text-[#1d1068]">{title}</h2>
                      <p className="font-semibold text-center text-gray-600">{decs}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>

        <section className="w-11/12 py-10 mx-auto 2xl:w-9/12 xl:w-5/6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h2 className="text-4xl font-extrabold text-center text-[#1d1068] leading-[3rem]">Handpick Our Unique Cricket Betting Software Solutions That Suits Your Style</h2>
            <p className="text-lg font-semibold text-gray-600">Choose your Cricket Betting Software Solutions according to your requirements. Whether it is custom cricket betting software solution, white label cricket betting software solution or maybe on-demand cricket betting software solution, we cater to every sporting app with the finest quality within financial means.</p>
          </div>

          <div className="py-10">
            <div className="flex items-center justify-center overflow-x-auto text-center border-b md:space-x-8">
              <span
                onClick={() => setTech(tech === 0 ? 0 : 0)}
                className={
                  tech === 0
                    ? " border-b-4 border-b-[#1d1068] text-[#1d1068] font-bold px-6 py-2 lg:text-2xl text-lg  capitalize cursor-pointer "
                    : "bg-transparent  text-gray-600  px-6 py-2 lg:text-2xl text-lg font-bold  capitalize cursor-pointer"
                }
              >
                Custom Cricket Betting Software
              </span>
              <span
                onClick={() => setTech(tech === 1 ? 0 : 1)}
                className={
                  tech === 1
                    ? " border-b-4 border-b-[#1d1068] text-[#1d1068] font-bold px-6 py-2 lg:text-2xl text-lg  capitalize cursor-pointer"
                    : "bg-transparent text-gray-600   px-6 py-2 lg:text-2xl text-lg font-bold  capitalize cursor-pointer"
                }
              >
                White Label Cricket Betting Software
              </span>
            </div>

            {tech === 0 ? (
              <>

                <div className="items-start py-10 space-x-0 space-y-10 lg:flex lg:space-x-10 md:space-y-0 lg:py-20">
                  <div className="w-full lg:w-1/2">
                    <div className="w-full space-y-6 text-left">
                      <p className="text-lg font-semibold text-gray-600">If you’re looking to launch a new venture or want to revamp an existing one. With our Custom Cricket Betting Software Service, we provide a custom-tailored betting software platform that matches the client’s unique requirements. Our creative experts are not just designers or mobile app developers, they’re your strategic partners in creating such a platform that fulfils all your desired features like integrating multi-currency support, SEO friendly platform, or maybe even voice enabled betting feature. We have it all.</p>
                      <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                        <li className='flex items-center'><span className='px-1'><BsCheck2All size={24} /></span> A customized UI/UX Design exclusive to your vision.</li>
                        <li className='flex items-center'><span className='px-1'><BsCheck2All size={24} /></span> Custom-build features and functionality crafted to your specification.</li>
                        <li className='flex items-center'><span className='px-1'><BsCheck2All size={24} /></span> Exceptional Mobile Responsiveness for seamless user experience.</li>
                        <li className='flex items-center'><span className='px-1'><BsCheck2All size={24} /></span> Highly scalable for future adaptations.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-center w-full pb-10 2xl:justify-start lg:w-1/2 lg:pb-0">
                    <Image className="rounded-md" alt="" src="/images/cricket-betting-dashboard.png" width={800} height={1000} />
                  </div>
                </div>
              </>
            ) : null}
            {tech === 1 ? (
              <>

                <div className="items-start py-10 space-x-0 space-y-10 lg:flex lg:space-x-10 md:space-y-0 lg:py-20">
                  <div className="flex justify-center w-full pb-10 2xl:justify-start lg:w-1/2 lg:pb-0">
                    <Image className="rounded-md" alt="" src="/images/white-lebal-cricket-betting.png" width={800} height={1000} />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="w-full space-y-6 text-left">
                      <p className="text-lg font-semibold text-gray-600">Unleash the potential of our White Label Cricket Betting Software Services which enables you to launch your own branded betting platform effortlessly. We provide ready-made betting softwares with cutting edge technologies allowing you to swiftly enter the world of cricket betting leaving your mark while we handle the technicalities.</p>
                      <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                        <li className='flex items-center'><span className='px-1'><BsCheck2All size={24} /></span> A re-branded customized betting software.</li>
                        <li className='flex items-center'><span className='px-1'><BsCheck2All size={24} /></span> Swift and assured entry into the betting market.</li>
                        <li className='flex items-center'><span className='px-1'><BsCheck2All size={24} /></span> Adherence to local gambling regulations</li>
                        <li className='flex items-center'><span className='px-1'><BsCheck2All size={24} /></span> 24x7 customer/back-end support</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </>
            ) : null}
          </div>
        </section>
        <section className="py-10 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("/images/gradients-background.webp")` }} >
          <div className="w-11/12 py-10 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6">
            <div className="space-y-10 text-center">
              <div className="mx-auto space-y-4">
                <h2 className="py-2 md:text-4xl text-3xl md:font-bold font-semibold md:leading-[3rem] text-[#00b7af]">Hit a big one with our winning Cricket Betting App Development Services</h2>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center space-x-6">
                <button className="block text-base font-medium  active text-white hover:text-[#1d1068] bg-[#1d1068] hover:bg-white hover:border-[#1d1068] hover:border rounded-full px-6 lg:py-4 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Let's Discuss</button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-11/12 py-10 mx-auto 2xl:w-9/12 xl:w-5/6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h2 className="text-4xl font-extrabold text-center text-[#1d1068] leading-[3rem]">Pivotal Features of Our Top-Tier Cricket Betting App</h2>
            <p className="text-lg font-semibold text-gray-600">Experience the thrill of live match on your fingertips with our comprehensive features of Cricket Betting App that redefines the game – from live odds to immersive in-play action.</p>
          </div>

          <div className="py-10">
            <div className="flex items-center overflow-x-auto text-center border-b md:space-x-8">
              <span
                onClick={() => setAdmin(admin === 0 ? 0 : 0)}
                className={
                  admin === 0
                    ? " border-b-4 border-b-[#1d1068] text-[#1d1068] font-bold px-6 py-2 lg:text-2xl text-lg  capitalize cursor-pointer "
                    : "bg-transparent  text-gray-600  px-6 py-2 lg:text-2xl text-lg font-bold  capitalize cursor-pointer"
                }
              >
                User Panel
              </span>
              <span
                onClick={() => setAdmin(admin === 1 ? 0 : 1)}
                className={
                  admin === 1
                    ? " border-b-4 border-b-[#1d1068] text-[#1d1068] font-bold px-6 py-2 lg:text-2xl text-lg  capitalize cursor-pointer"
                    : "bg-transparent text-gray-600   px-6 py-2 lg:text-2xl text-lg font-bold  capitalize cursor-pointer"
                }
              >
                Admin Panel
              </span>
            </div>

            {admin === 0 ? (
              <>

                <div className="items-start py-10 space-x-0 space-y-10 lg:flex lg:space-x-10 md:space-y-0 lg:py-20">
                  <div className="w-full lg:w-1/2">
                    <div className="w-full space-y-4 text-left">
                      <p className="text-lg font-semibold text-gray-600">User Registration/Login</p>
                      <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                        <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Enable user easy sign-up and login.</li>
                      </ul>
                      <p className="text-lg font-semibold text-gray-600">User Profile</p>
                      <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                        <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Allow users to manage their own profile.</li>
                      </ul>
                      <p className="text-lg font-semibold text-gray-600">Schedule Manager</p>
                      <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                        <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Enable users to schedule the match and betting activities.</li>
                      </ul>
                      <p className="text-lg font-semibold text-gray-600">Cricket Match Listing</p>
                      <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                        <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Display a list of all the upcoming matches.</li>
                      </ul>
                      <p className="text-lg font-semibold text-gray-600">Betting Markets</p>
                      <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                        <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Provide a wide range of betting options.</li>
                      </ul>
                      <p className="text-lg font-semibold text-gray-600">Real-time Updates</p>
                      <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                        <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Offer live match score updates.</li>
                      </ul>
                      <p className="text-lg font-semibold text-gray-600">Betting Tips $ Guides</p>
                      <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                        <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Gives a complete guide and tips on how to bet.</li>
                      </ul>
                      <p className="text-lg font-semibold text-gray-600">Multi-lingual Support</p>
                      <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                        <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Provides multiple language options to navigate.</li>
                      </ul>
                      <p className="text-lg font-semibold text-gray-600">Security Features</p>
                      <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                        <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span>Implement sturdy security measures.</li>
                      </ul>
                      <p className="text-lg font-semibold text-gray-600">Match Summary</p>
                      <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                        <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span>Offers a detailed analysis and summary of the matches.</li>
                      </ul>
                      <p className="text-lg font-semibold text-gray-600">Feedback & Customer Support</p>
                      <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                        <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span>Provide user feedback and customer assistance.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-center w-full pb-10 2xl:justify-start lg:w-1/2 lg:pb-0">
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flex flex-col items-center justify-center space-y-4 flip-card-front">
                          <img src="/images/user-registration.svg" alt="image" />
                          <p className='text-[#1d1068] text-xl font-bold'>User Registration/Login</p>
                        </div>
                        <div className="flex flex-col items-center justify-center flip-card-back">
                          <p className='text-xl font-bold'>Enable user easy sign-up and login</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
            {admin === 1 ? (
              <>

                <div className="items-start py-10 space-x-0 space-y-10 lg:flex lg:space-x-10 md:space-y-0 lg:py-20">
                  <div className="flex justify-center w-full pb-10 2xl:justify-start lg:w-1/2 lg:pb-0">
                    <Image className="rounded-md" alt="" src="/images/white-lebal-cricket-betting.png" width={800} height={1000} />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="w-full space-y-4">
                      <p className="text-lg font-semibold text-gray-600">Admin Dashboard</p>
                      <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                        <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Offers a centralized data overview.</li>
                      </ul>
                      <p className="text-lg font-semibold text-gray-600">User Management</p>
                      <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                        <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Enable admin to control user accounts.</li>
                      </ul>
                      <p className="text-lg font-semibold text-gray-600">Transaction Management</p>
                      <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                        <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Offers an overall financial oversight.</li>
                      </ul>
                      <p className="text-lg font-semibold text-gray-600">Betting Markets Control</p>
                      <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                        <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Allows managing markets and odds.</li>
                      </ul>
                      <p className="text-lg font-semibold text-gray-600">Match Management</p>
                      <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                        <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Provide match scheduling and details.</li>
                      </ul>
                      <p className="text-lg font-semibold text-gray-600">Risk Management </p>
                      <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                        <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Tools for risk assessment and mitigation.</li>
                      </ul>
                      <p className="text-lg font-semibold text-gray-600">Ads Management</p>
                      <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                        <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span>Allows controlling all advertisements on the betting app.</li>
                      </ul>
                      <p className="text-lg font-semibold text-gray-600">Admin Roles & Permissions</p>
                      <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                        <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Assign different roles and permissions to staff.</li>
                      </ul>
                      <p className="text-lg font-semibold text-gray-600">Reports & Analytics</p>
                      <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                        <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Generate reports and analysis on user activity.</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </>
            ) : null}
          </div>
        </section >

        <section className="w-11/12 py-10 mx-auto space-y-4 bg-white 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <h2 className=" text-[#1d1068] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">Extra Solutions we Provide in Sports Betting App</h2>
            <p> Our experts are dedicated to revamp your sports betting software experience with our on-demand betting software solutions. If you’re having a specific idea about your requirements then we have some ready-made betting apps like 1XBet, Parimatch, 22bet, betway, and many more.</p>
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



        <div className=" mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  lg:px-0  px-6 lg:py-20 py-10">
          <div className="md:space-y-10 space-y-6  w-full">
            <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#1d1068] text-center 2xl:leading-[3.5rem] xl:leading-[2.5rem] leading-[2rem] capitalize">
              Frequently Asked Questions (FAQ)
            </h2>
            <div className="w-full py-4 space-y-4">
              {Frequently.map((elem: any, index: any) => {
                const { title, desc, } = elem;
                return (
                  <div key={index} className="bg-white border cursor-pointer w-full rounded-lg"
                    onClick={() => setCurrentCount(currentCount === index ? false : index)}>
                    <div className={currentCount === index ? "flex items-start justify-center w-full px-4 py-4 text-base font-medium text-left md:items-center md:px-6  md:text-lg bg-[#00b7af] text-white" : "flex items-start justify-center w-full px-4 py-4 text-base font-medium text-left md:items-center md:px-6 text-[#1d1068] md:text-lg"}>
                      <h3 className="w-full text-base font-semibold md:text-lg">
                        {title}
                      </h3>
                      <BiChevronDown size={30} className={currentCount === index ? "icon icon-tabler icon-tabler-chevron-down rotate-180 transition-all duration-200 text-white" : "icon icon-tabler icon-tabler-chevron-down rotate-0 transition-all duration-200"} />
                    </div>
                    <div className={currentCount === index ? "py-6 px-6 text-black space-y-3 text-sm md:text-base transition-height duration-200 min-h-40" : "pt-0 px-6 text-black space-y-3 text-sm md:text-base transition-height duration-200 min-h-0 h-0 overflow-hidden"}>
                      <p>{desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <section className="py-10 bg-[#F0F2FA]">
          <div className="w-11/12 py-10 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6">
            <div className="space-y-10 text-center">
              <div className="mx-auto space-y-4">
                <h2 className='md:text-3xl text-2xl text-[#00b7af] font-bold'>Need help with a project?</h2>
                <h3 className='md:text-5xl text-4xl font-extrabold text-[#222569]'>Get a free consultation</h3>
                <p className="py-2 md:text-2xl text-xl md:font-bold font-semibold md:leading-[2rem] text-[#505050]">Ready to take the first step towards your innovative sports app? Connect with us today to unveil the potential of your digital endeavor. Our team is excited to discuss your ideas, collaborate on app strategies, and build sports software solutions that go beyond your expectations.</p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center space-x-6">
                <button className="block text-base active text-white font-semibold bg-[#00b7af] hover:text-[#00b7af]  hover:bg-white hover:border-[#00b7af] hover:border rounded-full px-6 lg:py-4 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Schedule a call</button>
                <button className="block text-base font-medium  active text-white hover:text-[#1d1068] bg-[#1d1068] hover:bg-white hover:border-[#1d1068] hover:border rounded-full px-6 lg:py-4 py-3 text-center lg:mt-0 cursor-pointer transition duration-300 relative w-60 ">Contact Us</button>
              </div>
            </div>
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

        </section >

      </div >
    </>
  )
}
