import Head from 'next/head';
import dynamic from "next/dynamic";
import Link from 'next/link';
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { useRef, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})


const Services = [
  {
    num: "1",
    bgcolor: "#fff5ca",
    icon: "/images/cricket-betting-app-development.svg",
    title: "Captivating Betting Experience",
    decs: "With having adept UI/UX designers and developers in our team, who are dedicated towards your success as their own by providing an immersive and robust app for PKL and tournaments where users can place bets with ease and enjoy the whole betting experience all together.",
  },
  {
    num: "2",
    bgcolor: "#dffedf",
    icon: "/images/soccer-betting-app-development.svg",
    title: "Emerging Market Potential",
    decs: "When compared to other widely followed sports like football or cricket, Kabaddi represents an unexplored market in the sports betting industry. Getting your own Kabaddi Betting App can rule being an early bird with less competition.",
  },
  {
    num: "3",
    bgcolor: "#e8ebff",
    icon: "/images/baseball-betting-app-development.svg",
    title: "Reach Global Audience",
    decs: "Kabaddi enthusiasts are at a global level, with fans and aficionados in countries like India, Pakistan, Bangladesh, and beyond. Your efficient app can cater to Kabaddi fans all over the world, diversifying your audience base.",
  },
  {
    num: "4",
    bgcolor: "#ffe8eb",
    icon: "/images/horse-racing-betting-app-development.svg",
    title: "Real-Time Bet Settlement",
    decs: "One of the vital advantages of the kabaddi betting online app is the real-time bet settlement feature. This means that users can get instant feedback on their bets, which can help them make informative decisions in the upcoming future timeframe.",
  },
];
const WhyChoose = [
  {
    num: "1",
    title: "Exclusive AI Powered Insights",
    decs: "Implementing artificial intelligence provides punters with predictive analytics and real-time kabaddi match insights, helping them make smarter betting decisions."
  },
  {
    num: "2",
    title: "Virtual Kabaddi Tournaments",
    decs: "Offering virtual Kabaddi tournaments using VR technique during off-seasons, provides users to bet on simulated matches and keep the thrill alive all year long."
  },
  {
    num: "3",
    title: "Kabaddi Fantasy Leagues",
    decs: "Fantasy kabaddi league incorporation allows bettors to create their own teams and compete against co-players, adding another twist of excitement and competition."
  },
  {
    num: "4",
    title: "Speech-based Betting",
    decs: "Speech-based betting enables the user/punter to place bets by using their voice, providing a completely hands-free and hassle-free experience."
  },
  {
    num: "5",
    title: "Mult-payment options, including Cryptos",
    decs: "Multiple payment gateway and cryptocurrency integration offers a convenience to the users to place bets swiftly using their preferred payment method including paypal, bitcoin, etc."
  },
  {
    num: "6",
    title: "Augmented Reality (AR) Features",
    decs: "AR technology offers users enticing kabaddi betting experiences, offering immersive virtual stadium tours, popular player interviews, and interactive game simulations."
  },

];


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
  const [tech1, setTech1] = useState(0);

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
            <h1 className="text-5xl font-extrabold text-center text-white">Kabaddi Betting App Development: A Winning Move</h1>
            <p className="text-2xl font-medium text-center text-white">Step into the world of thrilling kabaddi matches and big wins only with our feature-enriched kabaddi betting app development. We offer the best kabaddi betting app which is easy to navigate, has exciting features and propensity for profitability. Get your hands on the finest kabaddi online betting app, go forth and conquer the world of kabaddi betting.</p>
            <h3 className="text-3xl font-bold text-center text-white">Kabaddi Betting: A growing trend!</h3>
            <div className="flex items-center justify-center py-10 space-x-6">
              <button className="block text-base active text-white font-semibold bg-[#00b7af] hover:text-[#00b7af]  hover:bg-white hover:border-[#00b7af] hover:border rounded-full px-6 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Schedule a call</button>
            </div>
          </div>
        </div>

        <section className="bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("/images/gradients-background.webp")` }} >
          <div className="items-center w-11/12 py-10 mx-auto space-x-0 space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex lg:space-x-10 md:space-y-0 lg:py-20">
            <div className="w-full lg:w-1/2">
              <div className="w-full space-y-6 text-left">
                <h2 className="py-3 text-4xl font-extrabold text-[#222569]">Top-tier Kabaddi App Development Company</h2>
                <p className="text-lg font-semibold text-gray-600">Kabaddi betting has been gaining immense popularity in the new millennium. Originating from India, Kabaddi has surged intensely to other countries as well, engaging fans and carving a niche in the sporting industry. With this rising trend, gone are the days when you had to rely on shady local bookies for tips. Now, punters have the privilege to place their kabaddi bets with legit platforms like pro kabaddi betting apps.</p>
                <p className="text-lg font-semibold text-gray-600">Turn your enthusiasm into a kabaddi bet app imbued to yield lucrative outcomes. Get on board with the best kabaddi App Development Company for an ultimate sports betting app development experience that offers a wide range of markets and betting options to your betting audience.</p>
                <p className="text-lg font-semibold text-gray-600">Betting app for Kabaddi holds a positive trajectory ahead. Hire a kabaddi betting app developer now and don’t miss out on the action.</p>
                <div className="">
                  <button className="block text-base active text-white font-semibold bg-[#00b7af] hover:text-[#00b7af]  hover:bg-white hover:border-[#00b7af] hover:border rounded-full px-6 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Contact Us</button>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full pb-10 2xl:justify-start lg:w-1/2 lg:pb-0">
              <Image className="rounded-md" alt="" src="/images/Kabaddi-App-Development.webp" width={800} height={1000} />
            </div>
          </div>
        </section>

        <section className="w-11/12 mx-auto space-y-10 py-14 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
          <div className="space-y-10 text-center">
            <div className="mx-auto space-y-4">
              <h2 className="py-2 md:text-4xl text-3xl md:font-extrabold md:leading-[3rem] text-[#1d1068]">Benefits of a Kabaddi Betting Software</h2>
              <p className='text-lg text-gray-600 font-semibold'>Kabaddi betting software is an exceptional platform for sports fanatics to place their bets while enhancing their knowledge about the game. Our software is the best app for kabaddi betting that provides a safe and secure environment, multiple betting options, and a user-friendly interface. Here are various benefits of our Kabaddi betting app development:</p>
              <div className="grid grid-cols-1 gap-6 pt-6 capitalize md:grid-cols-2 divide-x-1 md:gap-10">
                {Services.map((elem) => {
                  const { title, icon, decs, num } = elem;
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
        </section>

        <section className="py-10 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("/images/gradients-background.webp")` }} >
          <div className="w-11/12 py-10 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6">
            <div className="space-y-10 text-center">
              <div className="mx-auto space-y-4">
                <h2 className="py-2 md:text-4xl text-3xl md:font-bold font-semibold md:leading-[3rem] text-[#00b7af] ">Want to dip your toes in the exciting world of Kabaddi betting? Well, if you're in for a thrilling ride, go ahead with our kabaddi betting app consultation services to maximize your chances of success.</h2>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center space-x-6">
                <button className="block text-base font-medium  active text-white hover:text-[#1d1068] bg-[#1d1068] hover:bg-white hover:border-[#1d1068] hover:border rounded-full px-6 lg:py-4 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Let's Talk</button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-11/12 py-10 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
          <div className="items-center py-10 mx-auto space-x-0 space-y-10 lg:flex lg:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full pb-10 2xl:justify-start lg:pb-0">
              <Image className="rounded-md" alt="" src="/images/sports-betting-app-development.webp" width={800} height={1000} />
            </div>
            <div className="w-full">
              <div className="w-full space-y-6 text-left">
                <h2 className="py-3 text-4xl font-extrabold text-[#222569]">Why Vigorous is your Best Choice for Kabaddi Betting App Development</h2>
                <p className="text-lg font-semibold text-gray-600">With a history of successfully delivering winning sports betting solutions, we’ll make your kabaddi betting app an unforgettable experience for your users. Choose us as your kabaddi betting app development partner, and together we pave the way to kabaddi betting glory.</p>
                <ul className='px-6 space-y-4 text-lg font-semibold text-gray-600 list-disc'>
                  <li>Kabaddi Passion Meets Professional Expertise</li>
                  <li>Unique Customization Option</li>
                  <li>Budget Friendly Brilliance</li>
                  <li>Round-the Clock Champions</li>
                  <li>Winning Mindset to you Project</li>
                  <li>Tech Pioneers for Kabaddi Betting Software Solutions</li>
                  <li>Crafting Innovations as we are Kabaddi Fanatics at heart
                  </li>
                </ul>
                <div className="">
                  <button className="block text-base active text-white font-semibold bg-[#00b7af] hover:text-[#00b7af]  hover:bg-white hover:border-[#00b7af] hover:border rounded-full px-6 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Contact Us</button>
                </div>
              </div>
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
                      <div key={num} className="p-6 card group space-y-2">
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


        <section className="w-11/12 py-10 mx-auto space-y-4 bg-white 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <h2 className=" text-[#1d1068] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">Other Solutions we you might want to have a look into</h2>
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
