import { useRef, useState } from 'react';
import Head from 'next/head';
import dynamic from "next/dynamic";
import Link from 'next/link';
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})




const BettingServices = [
  {
    num: "1",
    bgcolor: "#FFFFFF",
    icon: "/images/sports-betting-app-consultation.svg",
    title: "Soccer Betting App Consultation",
    decs: "Our well-versed crew of professionals brings in-depth industry insights, technical knowledge, and market expertise to the table. Our soccer betting app consultation services offer informative guidance, helping you capture the hearts of soccer enthusiasts across the globe.",
  },
  {
    num: "2",
    bgcolor: "#FFFFFF",
    icon: "/images/blockchain-based-sports-betting-website-development.svg",
    title: "Soccer Betting App Development",
    decs: "Enhance your mobile app development experience with our advanced Soccer Betting App Development Services. We offer end-to-end betting app solutions with immersive UI/UX, robust development and ironclad security measures ensuring your app steals the show.",
  },
  {
    num: "3",
    bgcolor: "#FFFFFF",
    icon: "/images/user-interface-design.svg",
    title: "Custom Soccer Betting Software",
    decs: "Our adept mobile app developers revolutionize your experience by custom-tailoring your unique requisite into the app and enhance the user engagement, easy access to information, and even monetization opportunities of your football betting software platform.",
  },
  {
    num: "4",
    bgcolor: "#FFFFFF",
    icon: "/images/sports-betting-app-development.svg",
    title: "Live Scores and Odds Integration",
    decs: "Being the best soccer betting app development company in the realm of real-time sports data. Our expert team seamlessly weaves live match scores and dynamic odds into your football app platform, ensuring to deliver the pulse of the nail-biting soccer match straight to your audience. your users stay on the edge of their seats.",
  },
  {
    num: "5",
    bgcolor: "#FFFFFF",
    icon: "/images/platform-compatibility.svg",
    title: "Payment Gateway Integration",
    decs: "Cross the threshold to breeze and secure transactions with our phenomenal payment gateway integration services. We integrate secure and user-centric payment methods into your platform. Whether it's buying football match tickets, placing bets, or making in-app purchases, we ensure your users can do it all seamlessly.",
  },
  {
    num: "6",
    bgcolor: "#FFFFFF",
    icon: "/images/maintenance-and-support.svg",
    title: "Multi-Platform Development",
    decs: "Transcend borders and reach a larger audience with our Multi-Platform Development Services. We have expertise in crafting versatile football betting applications that effortlessly operate across web, mobile, and beyond ensuring your brand's consistent presence on every device.",
  },
]

const ModusOperandi = [
  {
    num: "1",
    bgcolor: "#FFFFFF",
    icon: "/images/conceptual.svg",
    title: "Conceptualization and Planning",
    decsOne: "Defining the app's purpose and target audience.",
    decsTow: "Conduct market research and competitor analysis.",
  },
  {
    num: "2",
    bgcolor: "#FFFFFF",
    icon: "/images/discussion-and-planning.svg",
    title: "Design and Prototyping",
    decsOne: "Developing wireframes and prototypes.",
    decsTow: "Designing immersive UI/UX.",
  },
  {
    num: "3",
    bgcolor: "#FFFFFF",
    icon: "/images/web-development.svg",
    title: "Backend Development",
    decsOne: "Building a robust backend system.",
    decsTow: "Live scores, odds, and match updates Integration."
  },
  {
    num: "4",
    bgcolor: "#FFFFFF",
    icon: "/images/design-phase.svg",
    title: "Frontend Development",
    decsOne: "Frontend multi-platform development.",
    decsTow: "Implementing essential features.",
  },
  {
    num: "5",
    bgcolor: "#FFFFFF",
    icon: "/images/quality.svg",
    title: "Data Integration",
    decsOne: "Real-time data Integration.",
    decsTow: "Data and odds Integration.",
  },
  {
    num: "6",
    bgcolor: "#FFFFFF",
    icon: "/images/deployment.svg",
    title: "Security and Compliance",
    decsOne: "Implementing strong security measures.",
    decsTow: "Adhere with betting regulations and data privacy laws.",
  },
  {
    num: "7",
    bgcolor: "#FFFFFF",
    icon: "/images/maintenance.svg",
    title: "Payment Gateway Integration",
    decsOne: "Integrating secure payment gateways.",
    decsTow: "Ensuring financial data is encrypted and safe."
  },
  {
    num: "8",
    bgcolor: "#FFFFFF",
    icon: "/images/maintenance.svg",
    title: "Testing and Quality Assurance",
    decsOne: "Conducting thorough testing.",
    decsTow: "Compatibility test for multiplatform."
  },
  {
    num: "9",
    bgcolor: "#FFFFFF",
    icon: "/images/maintenance.svg",
    title: "App Launch",
    decsOne: "Launching the app on various app stores.",
    decsTow: "Monitoring user feedback."
  },
  {
    num: "10",
    bgcolor: "#FFFFFF",
    icon: "/images/maintenance.svg",
    title: "Customer Support & Maintenance",
    decsOne: "Providing responsive customer support.",
    decsTow: "Account-related queries and technical problems Assistance."
  },
]


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

export default function contactus() {
  const [admin, setAdmin] = useState(0);
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

        <div className="bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("/images/sports-betting-app-development-company.webp")` }} >
          <Header />
          <div className="w-11/12 py-5 mx-auto space-y-4 md:py-28 2xl:w-9/12 xl:w-5/6">
            <h1 className="text-5xl font-extrabold text-center text-white">Touchdown to Success with top-notch Soccer Betting App Development Company</h1>
            {/* <h2 className="py-3 text-3xl font-bold text-center text-white">We Create, You Win : Your Elite Sports Betting App Development Partner</h2> */}
            <p className="text-2xl font-medium text-center text-white">If you’re looking for a sleek soccer betting app development company in India, Vigorous IT Solutions might just be for you. Being one of the top Soccer Betting App Development Company in USA & India, we consistently deliver game-changing football betting apps to global clients that speak for themselves.</p>
            {/* <h3 className="text-3xl font-bold text-center text-white">Give your idea a chance to thrive.</h3> */}
            <div className="flex items-center justify-center py-10 space-x-6">
              <button className="block text-base active text-white font-semibold bg-[#00b7af] hover:text-[#00b7af]  hover:bg-white hover:border-[#00b7af] hover:border rounded-full px-6 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Schedule a call</button>
            </div>
          </div>
        </div>

        <section className="bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("/images/gradients-background.webp")` }} >
          <div className="items-center w-11/12 py-10 mx-auto space-x-0 space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex lg:space-x-10 md:space-y-0 lg:py-20">
            <div className="w-full lg:w-1/2">
              <div className="w-full space-y-6 text-left">
                <h2 className="py-3 text-4xl font-extrabold text-[#222569]">Vigorous IT : Connoisseur of Football Betting App Development Expertise</h2>
                <p className="text-lg font-semibold text-gray-600">Throughout history, soccer/football has consistently ranked among top-three sports in terms of player engagement, Television viewership, and receiving fan patronage. So looking at this ever-evolving landscape of the sports betting industry, approach to the best soccer betting apps is paramount.</p>
                <p className="text-lg font-semibold text-gray-600">At Vigorous IT, we’re not just delivering soccer betting applications; our passion lies in forging winning experiences. We go the extra mile to offer an all-inclusive suite of football betting software development with cutting-edge technology with the nuance of soccer betting expertise that truly sets us apart.</p>
                <p className="text-lg font-semibold text-gray-600">Our dedication to perfection extends past the launch phase. Our football betting app developer offers support and updates 24x7, keeping your soccer betting app right at the forefront of the industry. By partnering with Vigorous IT, you’re not just getting a mobile app, you’re securing an alliance dedicatedly committed to your success</p>
                {/* <ul className='px-6 space-y-4 text-lg font-semibold text-gray-600 list-disc'>
                  <li>Online Betting App Development</li>
                  <li>Custom Sports Betting Website</li>
                  <li>White label Sportsbook App Development</li>
                  <li>Sportsbook Software Integration</li>
                </ul> */}
              </div>
            </div>
            <div className="flex justify-center w-full pb-10 2xl:justify-start lg:w-1/2 lg:pb-0">
              <Image className="rounded-md" alt="" src="/images/sports-betting-app-development.webp" width={800} height={1000} />
            </div>
          </div>
        </section>

        {/* <section className="w-11/12 mx-auto space-y-10 py-14 2xl:w-4/6 xl:w-5/6">
          <div className="space-y-10 text-center">
            <div className="mx-auto space-y-4">
              <h2 className="py-2 md:text-4xl text-3xl md:font-extrabold md:leading-[3rem] text-[#1d1068]">We excel in crafting sports app development service solutions for a wide range of sports</h2>
              <div className="grid grid-cols-1 gap-6 pt-6 capitalize md:grid-cols-2 divide-x-1 md:gap-10">
                {Services.map((elem) => {
                  const { title, icon, decs, num, bgcolor } = elem;
                  return (
                    <div key={num} className="p-10 space-y-4 rounded-[10px]" style={{ backgroundColor: elem.bgcolor }}>
                      <div className="flex items-start w-20 h-20">
                        <img src={icon} alt={title} className="w-20 h-20" />
                      </div>
                      <h3 className="text-2xl text-left font-extrabold text-[#1d1068]">{title}</h3>
                      <p className="font-semibold text-left text-gray-600">{decs}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section> */}

        <section className='bg-[#f0f2f499] py-16'>
          <div className='w-11/12 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6 '>
            <h2 className="py-2 md:text-4xl text-3xl md:font-extrabold md:leading-[3rem] text-[#1d1068] text-center">Kickstart your Football App Journey with our Soccer App Development Services</h2>
            <p className="text-lg font-semibold text-center text-gray-600">Trust our premium soccer app development services to transform your soccer/football app idea and passion into a monetarily successful betting app, where navigation is a breeze and user satisfaction soars. Say goodbye to old traditional betting methods and hello to a robust football app development ease, all with our top-notch sports betting app development services.</p>
            <div className="grid w-full grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3">
              {BettingServices.map((elem) => {
                const { title, icon, decs } = elem;
                return (
                  <>
                    <div className="p-6 mt-20 space-y-4 hover:shadow-lg" style={{ backgroundColor: elem.bgcolor }}>
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


        <section className="w-11/12 py-10 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6">
          <div className="text-center">
            <div className="">
              <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#1d1068]">Tech Stack and Tools we Harness to Develop Soccer Betting Platform</h2>
              <p className="py-3 text-lg font-semibold text-gray-600">Adhering to technology trends is our speciality. We use different tools and technology to develop a robust soccer betting platform ensuring that our apps resonate deeply with your audience’s passions. Let’s explore our prominent tech stack:</p>
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
                  Front-End
                </span>
                <span
                  onClick={() => setAdmin(admin === 1 ? 0 : 1)}
                  className={
                    admin === 1
                      ? " border-b-4 border-b-[#1d1068] text-[#1d1068] font-bold px-6 py-2 lg:text-2xl text-lg  capitalize cursor-pointer"
                      : "bg-transparent text-gray-600   px-6 py-2 lg:text-2xl text-lg font-bold  capitalize cursor-pointer"
                  }
                >
                  Back-End
                </span>
                <span
                  onClick={() => setAdmin(admin === 2 ? 0 : 2)}
                  className={
                    admin === 2
                      ? " border-b-4 border-b-[#1d1068] text-[#1d1068] font-bold px-6 py-2 lg:text-2xl text-lg  capitalize cursor-pointer"
                      : "bg-transparent text-gray-600   px-6 py-2 lg:text-2xl text-lg font-bold  capitalize cursor-pointer"
                  }
                >
                  Testing
                </span>
                <span
                  onClick={() => setAdmin(admin === 3 ? 0 : 3)}
                  className={
                    admin === 3
                      ? " border-b-4 border-b-[#1d1068] text-[#1d1068] font-bold px-6 py-2 lg:text-2xl text-lg  capitalize cursor-pointer"
                      : "bg-transparent text-gray-600   px-6 py-2 lg:text-2xl text-lg font-bold  capitalize cursor-pointer"
                  }
                >
                  Security
                </span>
              </div>

              {admin === 0 ? (
                <>

                  <div className="items-start py-10 space-x-0 space-y-10 lg:flex lg:space-x-10 md:space-y-0 lg:py-20">
                    <div className="w-full lg:w-1/2">
                      <div className="w-full space-y-6 text-left">
                        <p className="text-lg font-semibold text-gray-600">HTML/CSS/JavaScript</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Basic web technologies we use for building the user interface and adding interactivity.</li>
                        </ul>
                        <p className="text-lg font-semibold text-gray-600">React, Angular, Wordpress & Nextjs</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Popular JavaScript frameworks for creating dynamic and responsive UI components.</li>
                        </ul>
                        <p className="text-lg font-semibold text-gray-600">UI/UX Design Tools</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Such as Adobe XD, Photoshop or Figma for designing immersive interfaces.</li>
                        </ul>
                        <p className="text-lg font-semibold text-gray-600">Responsive Design</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Ensuring the platform works seamlessly on multiple devices and screen resolutions.</li>
                        </ul>
                        <p className="text-lg font-semibold text-gray-600">API Integration</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Connecting with backend services to fetch and display real-time data.</li>
                        </ul>
                        <p className="text-lg font-semibold text-gray-600">Websockets</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Enabling real-time updates for live scores and odds.</li>
                        </ul>
                        <p className="text-lg font-semibold text-gray-600">Version Control</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Using Git for collaborative development and code management.</li>
                        </ul>
                        <p className="text-lg font-semibold text-gray-600">Performance Optimization</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Techniques like code splitting, lazy loading, and caching for faster loading times.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex justify-center w-full pb-10 2xl:justify-start lg:w-1/2 lg:pb-0">
                      <Image className="rounded-md" alt="" src="/images/pivotal-features-betting-app-software.webp" width={800} height={1000} />
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
                      <div className="w-full space-y-6 text-left">
                        <p className="text-lg font-semibold text-gray-600">Programming Languages</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Such as Php, Node.js, Csharp or Java for server-side logic.</li>
                        </ul>
                        <p className="text-lg font-semibold text-gray-600">Database Management Systems (DBMS)</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Like MySQL, PostgreSQL, or MongoDB for data storage.</li>
                        </ul>
                        <p className="text-lg font-semibold text-gray-600">APIs</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> To connect with external data sources, sports databases, and odds providers.</li>
                        </ul>
                        <p className="text-lg font-semibold text-gray-600">Server Frameworks</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Such as Express.js (Node.js), Nginx, or Apache for building server applications.</li>
                        </ul>
                        <p className="text-lg font-semibold text-gray-600">Cloud Services</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> PLike AWS, Azure, or Google Cloud for scalable and reliable hosting.</li>
                        </ul>
                        <p className="text-lg font-semibold text-gray-600">Authentication and Authorization</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Implementing secure user access with technologies like OAuth or JWT.</li>
                        </ul>
                        <p className="text-lg font-semibold text-gray-600">Real-time Data Processing</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Utilizing technologies like WebSockets or Redis for live updates.</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </>
              ) : null}
              {admin === 2 ? (
                <>

                  <div className="items-start py-10 space-x-0 space-y-10 lg:flex lg:space-x-10 md:space-y-0 lg:py-20">
                    <div className="w-full lg:w-1/2">
                      <div className="w-full space-y-6 text-left">
                        <p className="text-lg font-semibold text-gray-600">Test Automation Frameworks</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Such as Selenium, Appium, or TestComplete for automated testing of app functionalities.</li>
                        </ul>
                        <p className="text-lg font-semibold text-gray-600">Performance Testing Tools</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Like JMeter or LoadRunner to assess the app's scalability and performance under various loads.</li>
                        </ul>
                        <p className="text-lg font-semibold text-gray-600">Cross-Browser Testing Tools</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Such as BrowserStack or CrossBrowserTesting for ensuring app compatibility across different web browsers.</li>
                        </ul>
                        <p className="text-lg font-semibold text-gray-600">Mobile Emulators and Simulators</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Tools like Android Emulator or Apple's Xcode Simulator for testing on various mobile devices.</li>
                        </ul>
                        <p className="text-lg font-semibold text-gray-600">Bug Tracking and Reporting Systems</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Such as Jira or Bugzilla for efficient bug management and tracking.</li>
                        </ul>
                        <p className="text-lg font-semibold text-gray-600">Security Testing Tools</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Like OWASP ZAP or Nessus for identifying and addressing security vulnerabilities.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex justify-center w-full pb-10 2xl:justify-start lg:w-1/2 lg:pb-0">
                      <Image className="rounded-md" alt="" src="/images/cricket-betting-dashboard.png" width={800} height={1000} />
                    </div>
                  </div>
                </>
              ) : null}
              {admin === 3 ? (
                <>

                  <div className="items-start py-10 space-x-0 space-y-10 lg:flex lg:space-x-10 md:space-y-0 lg:py-20">
                    <div className="flex justify-center w-full pb-10 2xl:justify-start lg:w-1/2 lg:pb-0">
                      <Image className="rounded-md" alt="" src="/images/white-lebal-cricket-betting.png" width={800} height={1000} />
                    </div>
                    <div className="w-full lg:w-1/2">
                      <div className="w-full space-y-6 text-left">
                        <p className="text-lg font-semibold text-gray-600">Data Encryption</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Utilizing SSL/TLS certificates to encrypt data transmission.</li>
                        </ul>
                        <p className="text-lg font-semibold text-gray-600">Firewalls</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Implementing firewalls to protect against unauthorized access.</li>
                        </ul>
                        <p className="text-lg font-semibold text-gray-600">Security Scanners</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Employing tools like OWASP ZAP and Nessus to identify and mitigate vulnerabilities.</li>
                        </ul>
                        <p className="text-lg font-semibold text-gray-600">DDoS Protection</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> DDoS (Distributed Denial of Service) protection safeguards online services.</li>
                        </ul>
                        <p className="text-lg font-semibold text-gray-600">Secure Coding Practices</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> Adhering to secure coding standards and best practices.</li>
                        </ul>
                        <p className="text-lg font-semibold text-gray-600">Regular Security Audits</p>
                        <ul className='space-y-4 text-lg font-semibold text-gray-600 lg:px-6'>
                          <li className='flex items-center'><span className='px-1'><BsDot size={24} /></span> We Conduct routine security audits and assessments.</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </>
              ) : null}
            </div>

          </div>
        </section>

        <section className="py-10 bg-[#F0F2FA]">
          <div className="w-11/12 py-10 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6">
            <div className="space-y-10 text-center">
              <div className="mx-auto space-y-4">
                <h2 className='md:text-3xl text-2xl text-[#00b7af] font-bold'>Need a Developer</h2>
                <h3 className='md:text-5xl text-4xl font-extrabold text-[#222569]'>Looking to hire an expert and profound soccer app developer?</h3>
                <p className="py-2 md:text-2xl text-xl md:font-bold font-semibold md:leading-[2rem] text-[#505050]">We at Vigorous IT, bring a powerhouse of experience and unmatched expertise to the field, crafting top-notch, user-centric apps that set the bar high. Our seasoned developers are more than just coders, they are passionate about soccer who carry an expertise of intricate dynamics of the sports betting industry. With a track record of delivering top-notch, feature-rich sports betting apps, we are the game-changers you need on your team.</p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center space-x-6">
                {/* <button className="block text-base active text-white font-semibold bg-[#00b7af] hover:text-[#00b7af]  hover:bg-white hover:border-[#00b7af] hover:border rounded-full px-6 lg:py-4 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Schedule a call</button> */}
                <button className="block text-base font-medium  active text-white hover:text-[#1d1068] bg-[#1d1068] hover:bg-white hover:border-[#1d1068] hover:border rounded-full px-6 lg:py-4 py-3 text-center lg:mt-0 cursor-pointer transition duration-300 relative w-60">Hire a Developer!!</button>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="w-11/12 py-10 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6">
          <div className="text-center">
            <div className="">
              <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#1d1068] ">Unleashing the Potential of Betting Industry Across the Sports Spectrum</h2>
              <p className="py-2 text-3xl font-bold md:leading-[3rem] text-[#1d1068] ">Choose our on demand sports betting applications to make a mark</p>
            </div>
            <div className='grid w-full grid-cols-2 gap-4 mt-6 md:grid-cols-3'>
              <div className="block space-y-4">
                <img src="/images/skybuz.webp" alt="Art" className="" />
                <h3 className="text-2xl text-center mt-3 font-extrabold text-[#1d1068]">App like Melbet </h3>
                <p className="max-w-sm font-semibold text-center text-gray-600">This website is operated by Three Aces Curaçao N.V., registered in Curaçao under the number 155000, with the address at Heelsumstraat 51 Curaçao...</p>
              </div>
              <div className="block space-y-4">
                <img src="/images/loard99.webp" alt="Art" className="" />
                <h3 className="text-2xl text-center mt-3 font-extrabold text-[#1d1068]">App like 1XBet </h3>
                <p className="max-w-sm font-semibold text-center text-gray-600">This website is operated by Three Aces Curaçao N.V., registered in Curaçao under the number 155000, with the address at Heelsumstraat 51 Curaçao...</p>
              </div>
              <div className="block space-y-4">
                <img src="/images/fairplay.webp" alt="Art" className="" />
                <h3 className="text-2xl text-center mt-3 font-extrabold text-[#1d1068]">App like Betfair</h3>
                <p className="max-w-sm font-semibold text-center text-gray-600">This website is operated by Three Aces Curaçao N.V., registered in Curaçao under the number 155000, with the address at Heelsumstraat 51 Curaçao...</p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center mt-6 space-x-6">
                <button className="block text-base font-medium  active text-white hover:text-[#1d1068] bg-[#1d1068] hover:bg-white hover:border-[#1d1068] hover:border rounded-full px-6 lg:py-4 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Contact us </button> 
                <button className="block text-base font-medium  active text-white  bg-[#00b7af] hover:text-[#00b7af]  hover:bg-white hover:border-[#00b7af] hover:border rounded-full px-6 lg:py-4 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Schedule a call </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("/images/gradients-background.webp")` }} >
          <div className="w-11/12 py-10 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6">
            <div className="space-y-10 text-center">
              <div className="mx-auto space-y-4">
                <h2 className="py-2 md:text-4xl text-3xl md:font-bold font-semibold md:leading-[3rem] text-[#00b7af] ">Ready to elevate your sports betting app development experience? Drop your ideas and queries to create the next game-changing sports app. </h2>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center space-x-6">
                <button className="block text-base font-medium  active text-white hover:text-[#1d1068] bg-[#1d1068] hover:bg-white hover:border-[#1d1068] hover:border rounded-full px-6 lg:py-4 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Let's Talk</button>
              </div>
            </div>
          </div>
        </section> */}



        <section className="w-11/12 mx-auto space-y-10 py-14 2xl:w-4/6 xl:w-5/6">
          <div className="space-y-10 text-center">
            <div className="mx-auto space-y-4">
              <h2 className="py-2 md:text-4xl text-3xl md:font-extrabold md:leading-[3rem] text-[#1d1068]">Sculpting Victory: Our Soccer Betting App Development Process</h2>
              <p className='text-lg font-semibold text-center text-gray-600'>Explore the secret behind our soccer betting app development process, ensuring a secure, user-friendly, and compliant football betting application that exceeds the expectations of both soccer enthusiasts and punters.</p>
              <div className="grid grid-cols-1 pt-6 capitalize md:grid-cols-2 lg:grid-cols-4 divide-x-1 md:gap-6">
                {ModusOperandi.map((elem) => {
                  const { title, icon, decsOne, decsTow, num } = elem;
                  return (
                    <div key={num} className="p-10 space-y-4 rounded-[10px] bg-[#f0f2f4]">
                      <div className="flex items-start w-20 h-20">
                        <img src={icon} alt={title} className="w-20 h-20" />
                      </div>
                      <h3 className="text-2xl text-left font-extrabold text-[#1d1068]">{title}</h3>
                      <ul className='pl-6 space-y-2 list-disc'>
                        <li className="font-semibold text-left text-gray-600">{decsOne}</li>
                        <li className="font-semibold text-left text-gray-600">{decsTow}</li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

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


        {/* <section className="py-10 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("/images/gradients-background.webp")` }} >
          <div className="w-11/12 py-10 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6">
            <div className="space-y-10 text-center">
              <div className="mx-auto space-y-4">
                <h2 className="py-2 md:text-4xl text-3xl md:font-bold font-semibold md:leading-[3rem] text-[#505050]">Let's sail the complex landscape together and kickstart your journey to a successful sports betting app. Get in touch to book your free consultation now!!</h2>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center space-x-6">
                <button className="block text-base font-medium  active text-white hover:text-[#1d1068] bg-[#1d1068] hover:bg-white hover:border-[#1d1068] hover:border rounded-full px-6 lg:py-4 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Let's Discuss</button>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="w-11/12 mx-auto space-y-10 py-14 2xl:w-4/6 xl:w-5/6">
          <div className="space-y-10 text-center">
            <div className="mx-auto space-y-4">
              <h2 className="py-2 md:text-4xl text-3xl md:font-extrabold md:leading-[3rem] text-[#1d1068]">Why opt Vigorous IT Solutions as your leading Sports Betting App Development Partner?</h2>
              <p className='text-lg font-semibold text-center text-gray-600'>Vigorous IT Solutions specializes in crafting innovative Digital Solutions. That is why choosing us means opting an ultimate sports betting app development partner for a winning combination of expertise, novelty, and reliability. Let us shape your vision into a fruitful sports betting app solution tailored to your specific requirements leveraging cutting edge technology, and a commitment to your success.</p>
              <div className="grid grid-cols-1 gap-4 pt-6 capitalize md:grid-cols-2 lg:grid-cols-3 divide-x-1 md:gap-10">
                {DevelopmentPartner.map((elem) => {
                  const { title, icon, decs, num, bgcolor } = elem;
                  return (
                    <div key={num} className="p-6 space-y-4 rounded-[10px]" style={{ backgroundColor: elem.bgcolor }}>
                      <div className="flex items-start w-20 h-20">
                        <img src={icon} alt={title} className="w-20 h-20" />
                      </div>
                      <h3 className="text-2xl text-left font-extrabold text-[#1d1068]">{title}</h3>
                      <p className="font-semibold text-left text-gray-600">{decs}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section> */}

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
