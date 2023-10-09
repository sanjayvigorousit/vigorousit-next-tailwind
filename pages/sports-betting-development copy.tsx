import {useState} from 'react';
import Head from 'next/head';
import dynamic from "next/dynamic";
import Link from 'next/link';
import Image from "next/image";
import { BsArrowUpRight, BsCollectionPlay } from "react-icons/bs";
import { MdOutlineInsertInvitation } from "react-icons/md";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { BsArrowRight } from "react-icons/bs";


const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})


const Services = [
  {
    num: "1",
    bgcolor: "#fff5ca",
    icon: "/images/cricket-betting-app-development.svg",
    title: "Cricket Betting App Development",
    decs: "We develop a wide spectrum of cricket-related betting apps that helps boost user engagement offering user-involved features, live scores, real time updates and much more. We specialize in tailoring apps similar to Betway, 1xBet, Parimatch, etc.",
  },
  {
    num: "2",
    bgcolor: "#dffedf",
    icon: "/images/soccer-betting-app-development.svg",
    title: "Soccer Betting App Development",
    decs: "Get your hands on your very own sensational football betting application tailored for soccer zealots and bettors, offering that makes navigating the app a breeze, ensuring an enjoyable betting experience. We develop betting softwares similar to MyBookie, 888sport, Unibet, etc.",
  },
  {
    num: "3",
    bgcolor: "#e8ebff",
    icon: "/images/baseball-betting-app-development.svg",
    title: "Baseball Betting App Development",
    decs: "Our Baseball Betting App Development offers tons of betting options for new and experienced baseball bettors alike. Find great odds on baseball sporting events from around the globe wherever you’re located only with our feature-rich baseball betting app similar to Bet365, FanDuel, Fanatics, etc.",
  },
  {
    num: "3",
    bgcolor: "#ffe8eb",
    icon: "/images/horse-racing-betting-app-development.svg",
    title: "Horse racing Betting App Development",
    decs: "We have expertise in creating enticing horse racing betting apps that makes it easy to get started and attract a huge fan base with its variety selection and numerous ways to bet on horse races. Our robust betting mobile app similar to Paddy Power, Betfair, BetVictor, etc. offers tools and technology to uplift the overall horse racing betting experience.",
  },
];

const DevelopmentPartner = [
  {
    num: "1",
    bgcolor: "#f0f2f4",
    icon: "/images/proven-expertise.svg",
    title: "Proven Expertise",
    decs: "We have a factual track record of years in delivering top-tier sports betting apps, combining our technical prowess with a deep understanding of the sports betting industry.",
  },
  {
    num: "2",
    bgcolor: "#f0f2f4",
    icon: "/images/user-approach.svg",
    title: "User-Centric Approach",
    decs: "Our web developers' primary goal is to develop apps that prioritize user-friendly experience, making them intuitive, engaging, and easy to navigate.",
  },
  {
    num: "3",
    bgcolor: "#f0f2f4",
    icon: "/images/compliance-and-security.svg",
    title: "Compliance and Security",
    decs: "We adhere to strict betting industry standards, ensuring your app is secure, compliance with legal aspects, and compliant with relevant regulations.",
  },
  {
    num: "4",
    bgcolor: "#f0f2f4",
    icon: "/images/innovative-solution.svg",
    title: "Innovative Solutions",
    decs: "We stay at the forefront of latest technology trends, offering the latest features such as live betting, real-time data feeds, and engaging experiences to the sports aficionados.",
  },
  {
    num: "5",
    bgcolor: "#f0f2f4",
    icon: "/images/competitive-pricing.svg",
    title: "Competitive Pricing",
    decs: "Our primary goal is to assist our clients with competitive pricing without compromising on the quality of the product, helping you elevate your business as well as achieve a high ROI.",
  }
]

const BettingServices = [
  {
    num: "1",
    bgcolor: "#FFFFFF",
    icon: "/images/sports-betting-app-consultation.svg",
    title: "Sports Betting App Consultation",
    decs: "Being a top sports betting software solution company among the betting industry, we offer expert guidance on legal compliance, technology stack selection, user experience design, sports industry latest trends and market strategy. Whether you’re an established business or a newbie to the industry, our consultation will empower you to make informed decisions regarding your sports betting app idea and drive success in the competitive sports betting market.",
  },
  {
    num: "2",
    bgcolor: "#FFFFFF",
    icon: "/images/blockchain-based-sports-betting-website-development.svg",
    title: "Blockchain based Sports Betting Website Development",
    decs: "Our blockchain developers craft groundbreaking blockchain-based sports betting software platforms that ensure unbreachable security, transparency, and fairness. From transparent odds and secure transactions to tamper-proof records, our sports betting mobile app is a pioneering endeavor that is a perfect blend of blockchain technology with sports.",
  },
  {
    num: "3",
    bgcolor: "#FFFFFF",
    icon: "/images/user-interface-design.svg",
    title: "User Interface Design",
    decs: "Being the industry expert, we have ingenious UI/UX designers who work closely with the client to grasp the vision, target audience and unique nature of the brand. We craft interfaces that are not only aesthetically amusing but also highly functional that drives user satisfaction, conversions and brand royalty. Whether you’re launching a new sports website, or app or looking to revamp your existing one, our UI/UX Design Service will be your partner in creating digital experiences that leave a lasting impression.",
  },
  {
    num: "4",
    bgcolor: "#FFFFFF",
    icon: "/images/sports-betting-app-development.svg",
    title: "Sports Betting App Development",
    decs: "Our Sports Betting App Development services are at the forefront of innovation in the world of sports and technology. We offer a comprehensive suite of solutions tailored to meet the unique needs of sports enthusiasts, sportsbook operators, and entrepreneurs looking to enter the dynamic realm of sports betting. Whether it's real-time odds integration, live match updates, or robust user account management, we ensure that every aspect of the app is designed to enhance the betting experience.",
  },
  {
    num: "5",
    bgcolor: "#FFFFFF",
    icon: "/images/platform-compatibility.svg",
    title: "Platform Compatibility",
    decs: "Our Platform Compatibility Service is designed to ensure that your digital solution functions flawlessly across a diverse spectrum of devices and operating systems. Our dedicated team of experts meticulously tests and optimizes your software, website, or application to guarantee that it not only performs seamlessly but also delivers a consistent and user-friendly experience across all platforms. With our Platform Compatibility Service, you can confidently reach and engage with a wider audience, irrespective of the devices or browsers they use or prefer.",
  },
  {
    num: "6",
    bgcolor: "#FFFFFF",
    icon: "/images/maintenance-and-support.svg",
    title: "Maintenance & Support",
    decs: "We promise 24x7 maintenance and support that keep your digital product running smoothly and stay updated with technology vogue. This includes fixing bugs, enhancing security, optimizing performance, and providing ongoing user assistance. Regular updates and monitoring ensure your product remains compatible with evolving technologies, stays vigilant against potential threats, and adapts to changing user needs, helping you provide a seamless and reliable experience to your users.",
  },
]


  export default function contactus() {
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
              <h1 className="text-5xl font-extrabold text-center text-white">Sports Betting App Development Company</h1>
              <h2 className="py-3 text-3xl font-bold text-center text-white">We Create, You Win : Your Elite Sports Betting App Development Partner</h2>
              <p className="text-2xl font-medium text-center text-white">So you want to develop a comprehensive sports betting application but don’t know where to start? Fear not we got you covered. Being a top sports betting app development company, we at Vigorous IT Solutions, create business-oriented sports apps for multiple niche such as cricket, football, golf, baseball, kabaddi, horse racing, and many more. Get your hands on the finest sports app development solution and experience the most seamless betting like never before with our custom betting app softwares.</p>
              <h3 className="text-3xl font-bold text-center text-white">Give your idea a chance to thrive.</h3>
              <div className="flex items-center justify-center py-10 space-x-6">
                <button className="block text-base active text-white font-semibold bg-[#00b7af] hover:text-[#00b7af]  hover:bg-white hover:border-[#00b7af] hover:border rounded-full px-6 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Schedule a call</button>
              </div>
            </div>
          </div>

          <section className="bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("/images/gradients-background.webp")` }} >
            <div className="items-center w-11/12 py-10 mx-auto space-x-0 space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex lg:space-x-10 md:space-y-0 lg:py-20">
              <div className="w-full lg:w-1/2">
                <div className="w-full space-y-6 text-left">
                  <h2 className="py-3 text-4xl font-extrabold text-[#222569]">Sports Betting App Development</h2>
                  <p className="text-lg font-semibold text-gray-600">Vigorous IT Solution takes immense pride in delivering the cutting edge sports betting app development services in the industry. After accumulating years of expertise, and having a team of expert sports enthusiasts, we have established ourselves as the go-to-choice for global clients looking to transform their sports app ideas into tangible solutions.</p>
                  <p className="text-lg font-semibold text-gray-600">Our professionals carry a deep understanding of the sports betting landscape and expertise in mobile app development, creating top-notch mobile betting applications and sports betting websites that makes our clients outshine the competition.</p>
                  <p className="text-lg font-semibold text-gray-600">Experience next-gen sports betting app development with our company’s ingenious value proposition. Choose us for unparalleled excellence in custom sports betting website development.</p>
                  <ul className='px-6 space-y-4 text-lg font-semibold text-gray-600 list-disc'>
                    <li>Online Betting App Development</li>
                    <li>Custom Sports Betting Website</li>
                    <li>White label Sportsbook App Development</li>
                    <li>Sportsbook Software Integration</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center w-full pb-10 2xl:justify-start lg:w-1/2 lg:pb-0">
                <Image className="rounded-md" alt="" src="/images/sports-betting-app-development.webp" width={800} height={1000} />
              </div>
            </div>
          </section>

          <section className="w-11/12 mx-auto space-y-10 py-14 2xl:w-4/6 xl:w-5/6">
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
          </section >

          <section className="w-11/12 py-10 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6">
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
                  {/* <button className="block text-base font-medium  active text-white hover:text-[#1d1068] bg-[#1d1068] hover:bg-white hover:border-[#1d1068] hover:border rounded-full px-6 lg:py-4 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Contact us </button> */}
                  <button className="block text-base font-medium  active text-white  bg-[#00b7af] hover:text-[#00b7af]  hover:bg-white hover:border-[#00b7af] hover:border rounded-full px-6 lg:py-4 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Schedule a call </button>
                </div>
              </div>
            </div>
          </section>

          <section className="w-11/12 py-10 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6">
            <div className="text-center">
              <div className="">
                <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#1d1068] ">Pivotal Features that makes your Betting App Software stand head and shoulder above</h2>
              </div>
              <div className=''>
                <div>
                  <div className="sm:hidden">
                    <label htmlFor="Tab" className="sr-only">Tab</label>
                    <select id="Tab" className="w-full border-gray-200 rounded-md">
                      <option>Settings</option>
                      <option>Messages</option>
                      <option>Archive</option>
                      <option>Notifications</option>
                    </select>
                  </div>
                  <div className="hidden sm:block">
                    <div className="border-b border-gray-200">
                      <nav className="flex gap-6 -mb-px" aria-label="Tabs">
                        <div className="inline-flex items-center gap-2 px-1 pb-4 text-lg font-bold text-gray-500 border-b-2 border-transparent shrink-0 hover:border-gray-300 hover:text-gray-700">Admin Panel</div>
                        <div className="inline-flex items-center gap-2 px-1 pb-4 text-lg font-bold text-gray-500 border-b-2 border-transparent shrink-0 hover:border-gray-300 hover:text-gray-700">Bookie Panel</div>
                        <div className="inline-flex items-center gap-2 px-1 pb-4 text-lg font-bold border-b-2 shrink-0 border-sky-500 text-sky-600">Punter Panel</div>
                      </nav>
                    </div>
                  </div>
                </div>

                <div className="items-center py-10 mx-auto space-x-0 space-y-10 lg:flex lg:space-x-10 md:space-y-0">
                  <div className="w-full">
                    <div className="w-full space-y-6 text-left">
                      <h2 className="py-3 text-4xl font-extrabold text-[#222569]">Sports Betting App Development</h2>
                      <p className="text-lg font-semibold text-gray-600">Vigorous IT Solution takes immense pride in delivering the cutting edge sports betting app development services in the industry. After accumulating years of expertise, and having a team of expert sports enthusiasts, we have established ourselves as the go-to-choice for global clients looking to transform their sports app ideas into tangible solutions.</p>
                      <p className="text-lg font-semibold text-gray-600">Our professionals carry a deep understanding of the sports betting landscape and expertise in mobile app development, creating top-notch mobile betting applications and sports betting websites that makes our clients outshine the competition.</p>
                      <p className="text-lg font-semibold text-gray-600">Experience next-gen sports betting app development with our company’s ingenious value proposition. Choose us for unparalleled excellence in custom sports betting website development.</p>
                      <ul className='px-6 space-y-4 text-lg font-semibold text-gray-600 list-disc'>
                        <li>Online Betting App Development</li>
                        <li>Custom Sports Betting Website</li>
                        <li>White label Sportsbook App Development</li>
                        <li>Sportsbook Software Integration</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-center w-full pb-10 2xl:justify-start lg:pb-0">
                    <Image className="rounded-md" alt="" src="/images/sports-betting-app-development.webp" width={800} height={1000} />
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section className="w-11/12 py-10 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6">
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
          </section>


          <section className="w-11/12 mx-auto space-y-10 py-14 2xl:w-4/6 xl:w-5/6">
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
          </section>

          <section className='bg-[#f0f2f499] py-16'>
            <div className='w-11/12 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6 '>
              <div className="grid w-full grid-cols-1 gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3">
                {BettingServices.map((elem) => {
                  const { title, icon, decs, num, bgcolor } = elem;
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
                    <div className="flex items-start mb-6">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          type="checkbox"
                          defaultValue=""
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        />
                      </div>
                      <label
                        htmlFor="terms"
                        className="ml-2 text-base font-medium text-[#ABA5CC] "
                      >
                        By submitting this form I consent to processing my personal data as described
                        in the{" "}
                        <a href="#" className="text-white hover:underline ">
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                    <div className="flex justify-center gap-5 pt-2 2xl:pt-4">

                      <div className="">
                        <Link href="https://api.whatsapp.com/send?phone=918209514612" passHref={true}>
                          <div className="px-4 py-2 text-lg rounded-full relative inline-flex group items-center justify-center  cursor-pointer bg-[#00B7AF]   hover:bg-gradient-to-r from-[#183176] to-[#049BA3] text-white overflow-hidden">
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                            <span className="relative text-base"> Schedule a call</span>
                            <BsArrowRight className="ml-2 transition-all duration-200 ease-out " />
                          </div>
                        </Link>
                      </div>
                      <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                          <input
                            id="terms"
                            type="checkbox"
                            defaultValue=""
                            className="w-4 h-4 border border-gray-300 rounded-xl bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                          />
                        </div>
                        <label
                          htmlFor="terms"
                          className="ml-2 text-base font-medium text-[#ABA5CC] "
                        >
                          Send me NDA
                        </label>
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
            </div>

          </section>

        </div >

      </>
    )
  }
