import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react'

import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";

// const HeroSection = dynamic(() => import('../components/HeroSection'), {
//   loading: () => <p>Loading...</p>,
// })
// const BlogSection = dynamic(() => import('../components/BlogSection'), {
//   loading: () => <p>Loading...</p>,
// })

const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})

export default function Contact(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>  Contact us | App and Web Development Team | Get in Touch - vigorousit.com</title>
        <link rel="canonical" href="https://www.vigorousit.com/contact-us" />
        <meta name="description" content="Contact Vigorous IT Solutions to discuss your project requirements. Our experienced developers can help you bring your app or web project to life. Get in touch with us today to get started."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="  Contact us | App and Web Development Team | Get in Touch - Vigorous IT Solutions" />
        <meta property="og:description" content="Contact Vigorous IT Solutions to discuss your project requirements. Our experienced developers can help you bring your app or web project to life. Get in touch with us today to get started." />
        <meta property="og:url" content="https://www.vigorousit.com/contact-us" />
        <meta property="og:site_name" content="Vigorous IT Solutions" />
        <meta property="article:modified_time" content="2022-09-01T13:05:06+00:00" />
        <meta property="og:image" content="https://www.vigorousit.com/logo/Vigorous-logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vigorousit" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="7 minutes" />
      </Head>
      <div className="overflow-hidden">
        <div
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("/images/contact-us-bg.webp")` }} >
          <div className=" bg-gradient-to-r from-[#1B176B] to-[#059BA3]">
            <Header />
            <div className="py-5 2xl:py-32 md:py-24">
              <div className="flex flex-col-reverse w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 md:flex-row md:items-center md:space-x-28">
                <div className="w-full">
                  <div className="space-y-6">
                    <h1 className="text-white xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
                      <span className='text-[#02B7AF]'>Get in Touch, Get Inspired:</span>
                      <p>Let's Create Something Amazing</p>
                    </h1>
                    <p className="w-full mx-auto text-sm font-light text-white/80 lg:text-base">
                      At Vigorous, we take immense pride in turning your visionary sports app concept into a tangible digital manifestation. Our Zealous team of creative minds, sports fanatics and ingenious developers collaborates seamlessly to revamp just a mere idea into prolific sports software.
                    </p>
                    <p className="w-full mx-auto text-sm font-light text-white/80 lg:text-base">
                      Whether it's a sleek website, an intuitive mobile app, or an immersive software platform, we're thrilled to discuss your sports app idea and to bridge the gap between imagination and creation.
                    </p>
                    <p className="w-full mx-auto text-sm font-light text-white/80 lg:text-base">
                      So why wait? Contact us today and rest assured that our phenomenal services will leave you satisfied and eager to work with us over and over again.                    </p>
                  </div>
                  {/* <div className="py-10">
                    <Link href="https://api.whatsapp.com/send?phone=918209514612" passHref={true}>
                      <div className="px-10 py-4 text-lg rounded-full relative inline-flex group items-center justify-center  cursor-pointer   bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white overflow-hidden">
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                        <span className="relative"> Hire Us</span>
                        <BsArrowRight className="ml-2 transition-all duration-200 ease-out " />
                      </div>
                    </Link>
                  </div> */}
                </div>
                <div className="hidden w-[30%] xl:flex justify-center">
                  {/* <img
                    className="object-cover "
                    src="/images/24X7_support.png"
                    width={500}
                    height={500}
                    // loading="eager"
                    // priority
                    alt="support"
                  /> */}
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <section className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex md:space-x-10 md:space-y-0">
            <div className="w-full space-y-6 text-center md:text-left">

              <div className="grid gap-6 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
                <div className="p-6 space-y-4 transition-all duration-200 border cursor-pointer group group-hover:w-56 group-hover:h-56 rounded-xl "
                  style={{ backgroundColor: "rgb(240,242,244)" }} >
                  <div className="py-4 space-y-5">
                    <h3 className="text-2xl font-bold text-[#1D1068] ">Discuss Our Services</h3>
                    <p className="font-medium break-all text-slate-800">
                      Looking to outsource your software development? Discuss your needs with one of our reps.
                    </p>
                    <div className="">
                      <Link href="https://api.whatsapp.com/send?phone=918209514612" passHref={true}>
                        <div className="px-4 py-2 text-lg rounded-full relative inline-flex group items-center justify-center  cursor-pointer bg-[#00B7AF]   hover:bg-gradient-to-r from-[#183176] to-[#049BA3] text-white overflow-hidden">
                          <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                          <span className="relative text-base"> Talk to our expert</span>
                          <BsArrowRight className="ml-2 transition-all duration-200 ease-out " />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4 transition-all duration-200 border cursor-pointer group group-hover:w-56 group-hover:h-56 rounded-xl "
                  style={{ backgroundColor: "rgb(240,242,244)" }} >
                  <div className="py-4 space-y-5">
                    <h3 className="text-2xl font-bold text-[#1D1068] ">Careers at Vigorous it</h3>
                    <p className="font-medium break-all text-slate-800">
                      Shape the future of tech in a dynamic company with over 4,000 experts worldwide.
                    </p>
                    <div className="">
                      <Link href="https://api.whatsapp.com/send?phone=918209514612" passHref={true}>
                        <div className="px-4 py-2 text-lg rounded-full relative inline-flex group items-center justify-center  cursor-pointer bg-[#00B7AF]   hover:bg-gradient-to-r from-[#183176] to-[#049BA3] text-white overflow-hidden">
                          <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                          <span className="relative text-base"> View job openings</span>
                          <BsArrowRight className="ml-2 transition-all duration-200 ease-out " />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4 transition-all duration-200 border cursor-pointer group group-hover:w-56 group-hover:h-56 rounded-xl "
                  style={{ backgroundColor: "rgb(240,242,244)" }} >
                  <div className="py-4 space-y-5">
                    <h3 className="text-2xl font-bold text-[#1D1068] ">General Inquiries</h3>
                    <p className="font-medium break-all text-slate-800">
                      Any other queries or support needs just call us ar talk to our experts. They Will surely help to you.
                    </p>
                    <div className="">
                      <Link href="https://api.whatsapp.com/send?phone=918209514612" passHref={true}>
                        <div className="px-4 py-2 text-lg rounded-full relative inline-flex group items-center justify-center  cursor-pointer bg-[#00B7AF]   hover:bg-gradient-to-r from-[#183176] to-[#049BA3] text-white overflow-hidden">
                          <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                          <span className="relative text-base"> Schedule a call</span>
                          <BsArrowRight className="ml-2 transition-all duration-200 ease-out " />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div id="contact-us">
          <div className="bg-gradient-to-b from-[#1B176B] to-[#0E668D] py-20" id="contact">

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

          </div>
        </div>
      </div>
    </>
  )
}
