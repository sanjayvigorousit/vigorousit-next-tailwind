import React from 'react';
import Head from 'next/head';
import dynamic from "next/dynamic";
import Link from 'next/link';
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { BsArrowRight } from 'react-icons/bs';

const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})

export default function contactus() {
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

        <div className=" bg-gradient-to-r from-[#1d1068] to-[#00b7af]">
          <Header />
          <div className="py-5 2xl:py-36 md:py-24">
            <div className="flex flex-col-reverse w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 md:flex-row md:items-center md:space-x-28">
              <div className="w-full">
                <div className="space-y-6">
                  <h1 className="text-white xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
                    Transforming Your Sporting Ideas into Triumphs
                  </h1>
                  <p className="w-full mx-auto text-xl font-light text-white/80 lg:text-3xl">
                    Experience, Rigor, and a User-Centric Approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="items-start w-11/12 py-10 mx-auto space-x-0 space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex lg:space-x-10 md:space-y-0 lg:py-20">
          <div className="flex justify-center w-full pb-10 2xl:justify-start lg:w-1/2 lg:pb-0">
            <Image className="rounded-md" alt="" src="/images/home-about.webp" width={713} height={857} />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-full space-y-10 text-left">
              <p className="text-lg font-semibold text-gray-600">
                Welcome to Vigorous IT Solutions, your trusted sports web and app development partner in shaping your digital experiences to reality because that matters. With a passion for innovation in the sports arena and a commitment to excellence, Vigorous IT can be a doorway to innovative web and the best sports mobile app solutions that redefine industries and elevate businesses. Certainly, here are concise points highlighting what sets us apart in the web and app development industry -
              </p>
              <ul className='px-6 space-y-8 text-lg font-semibold text-gray-600'>
                <li>Years of Experience & unbridled passion in the sports industry.</li>
                <li>Pioneering technology integration for standout sports apps.</li>
                <li>Tailoring versatile solutions for a wide spectrum of sports.</li>
                <li>Ensuring seamless quality and performance through meticulous testing.</li>
                <li>Keeping clients transparent and informed communication at every step.</li>
                <li>On-time delivery without compromising on excellence.</li>
                <li>Post-launch support and continuous support.</li>
                <li>Expertise in iOS, Android, and cross-platform development.</li>
                <li>Demonstrated by a track record of satisfied clients and accolades.</li>
              </ul>
            </div>
          </div>
        </section>
        <div className="py-10 bg-gray-100 lg:py-20">
          <section className="w-11/12 mx-auto space-y-0 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:space-y-10">
            <div className="items-center py-4 space-y-10 md:flex md:space-y-0 md:space-x-10 lg:py-10">
              <div className="flex justify-center w-full md:justify-start ">
                <Image src="/images/vision.webp" alt="Our Vision" className="rounded-lg " loader={uploadcareLoader} unoptimized={true} width={600} height={600} />
              </div>
              <div className="w-full space-y-6 text-center md:text-left">
                <div className="space-y-3">
                  <h2 className="text-4xl font-bold text-[#0E1F51]">Our Vision</h2>
                </div>
                <p className="text-base text-black">
                  We believe that nothing can beat you if you keep your ethics and values alive. We aspire to be the go-to choice for businesses seeking reliable and custom-made digital solutions. We put our efforts into enhancing client’s business performance, by providing impeccable gaming solutions and customer service. We envision to be a leading force in the digital landscape, recognized for our exceptional web and mobile app development services. We draw in the best of our assets because we value our client’s time & goals.  </p>
              </div>
            </div>
            <div className="flex flex-col-reverse items-center space-y-10 md:flex-row md:space-y-0 md:space-x-10 oy-0 lg:py-10">
              <div className="w-full mt-10 space-y-6 text-center md:text-left md:mt-0">
                <div className="space-y-3">
                  <h2 className="text-4xl font-bold text-[#0E1F51]">Our Mission</h2>
                </div>
                <p className="text-base text-black"> Being a top web development company in India, our mission is to empower global businesses with innovative and user-centric web and mobile app solutions. By combining cutting-edge technology, creative design, and strategic thinking, we aim to create digital experiences that elevate brands, engage users, and drive tangible results. We have a blend of a compelling and enthusiastic team who makes the client’s success feasible and work on the “together we evolve” approach.</p>
              </div>
              <div className="flex justify-center w-full md:justify-end">
                <Image src="/images/mission.webp" alt="Our Mission" className="rounded-xl w-6/6" width={600} height={600} />
              </div>
            </div>
          </section>
        </div>
        <section className="w-11/12 py-10 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6">
          <div className="space-y-10 text-center">
            <div className="mx-auto space-y-4">
              <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#1d1068] ">Why Vigorous IT Solutions is a Win-win Option for You?  </h2>
              <p className="text-xl text-slate-800">When you choose Vigorous IT, you're not just choosing a sports app development service provider – you're choosing a partner who is genuinely invested in your success. We don't just build sports apps and sports websites; we craft experiences that captivate, engage, and leave a lasting impact. With a dedicated team, innovative solutions, and a commitment to excellence, we're your partner in your web app success. We're here to guide you through your digital journey of transforming your dream into seamless reality by providing transparent communication, reliable support, and sports app solutions that make you stand out among the web development industry long after launch.</p>
            </div>
          </div>
        </section>
        <section className="w-11/12 py-10 mx-auto space-y-10 2xl:w-4/6 xl:w-5/6">
          <div className="space-y-10 text-center">
            <div className="mx-auto space-y-4">
              <h2 className="py-2 md:text-3xl text-xl md:font-bold font-semibold md:leading-[3rem] text-[#00b7af] ">Join us as we embark on a journey to create the next wave of digital innovation. </h2>
            </div>
            <div className='grid grid-cols-2 gap-4 lg:grid-cols-6 md:grid-cols-3'>
              <div className='flex flex-col items-center space-y-2'>
                <Image className="rounded-md" alt="" src="/images/experience.svg" width={40} height={40} />
                <p className='text-[#1d1068]'>Intensive Industry Experience</p>
              </div>
              <div className='flex flex-col items-center space-y-2'>
                <Image className="rounded-md" alt="" src="/images/reward.svg" width={40} height={40} /><p className='text-[#1d1068]'>Competitive Pricing</p>
              </div>
              <div className='flex flex-col items-center space-y-2'>
                <Image className="rounded-md" alt="" src="/images/fast-delivery.svg" width={40} height={40} /><p className='text-[#1d1068]'>Fast Turnaround</p>
              </div>
              <div className='flex flex-col items-center space-y-2'>
                <Image className="rounded-md" alt="" src="/images/resize.svg" width={40} height={40} /><p className='text-[#1d1068]'>Scalability Options</p>
              </div>
              <div className='flex flex-col items-center space-y-2'>
                <Image className="rounded-md" alt="" src="/images/quality-assurance.svg" width={40} height={40} /><p className='text-[#1d1068]'>Quality Assurance</p>
              </div>
              <div className='flex flex-col items-center space-y-2'>
                <Image className="rounded-md" alt="" src="/images/loyal-customer.svg" width={40} height={40} />
                <p className='text-[#1d1068]'>100% Client Retention</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center space-x-6">
              <button className="block text-base font-medium  active text-white hover:text-[#1d1068] bg-[#1d1068] hover:bg-white hover:border-[#1d1068] hover:border rounded-full px-6 lg:py-4 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Contact us </button>
              <button className="block text-base font-medium  active text-white  bg-[#00b7af] hover:text-[#00b7af]  hover:bg-white hover:border-[#00b7af] hover:border rounded-full px-6 lg:py-4 py-3 text-center  lg:mt-0  cursor-pointer transition duration-300 relative w-60 ">Schedule a call </button>
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
      </div>
    </>
  )
}
