import React from "react";
import "../styles/globals.css";
import "../styles/style.scss";
import type { AppProps, } from "next/app";
import Footer from "../components/Footer";
import Link from "next/link";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import { BsChevronUp } from "react-icons/bs";
import { Head, } from "next/document";
import Script from 'next/script';
// import blogPostSchema from "./schemas/blog-post-schema";
// import GetinTouch from "./components/Getintouch";

const blogPostSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.comfygen.com/',
  name: 'Mobile App and Web Development Company',
  image: 'https://www.comfygen.com/svg/comfygen-logo.svg',
  url: 'https://www.comfygen.com/',
  telephone: '+91 9587867258',
  review: {
    '@type': 'Review',
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.9',
    bestRating: '5',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'F-152, Dayanand Marg, Nemi Nagar',
    addressLocality: 'Vaishali Nagar',
    addressRegion: 'Jaipur',
    postalCode: '302021 ,',
    addressCountry: 'IN',
  },
  offers: {
    '@type': 'Offer',
    price: '20-25',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  author: {
    '@type': 'Person',
    name: 'Comfygen',
  },
};

// const CompanyLink = dynamic(() => import("../components/CompanyLink"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });
// const DreamProject = dynamic(() => import("./components/DreamProject"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });
// const GetinTouch = dynamic(() => import("./components/Getintouch"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

export const config = {
  unstable_runtimeJS: false,
};

function top() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function MyApp({ Component, pageProps }: AppProps, props: any) {

  return (
    <main className="overflow-hidden">
      <Component {...pageProps} />
      {/* <GetinTouch />
      <DreamProject /> */}
      <Footer />
      <div className="fixed hidden whatsapp_icon_fix bottom-8 left-8 lg:block">
        <a href="https://api.whatsapp.com/send?phone=918209514612" title="Whatsapp"
          target="_blank" >
          <div className="bg-[#25d366] w-[60px] h-[60px] flex items-center justify-center rounded-full text-white pulse cursor-pointer">
            <svg focusable="false" viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
              <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path>
            </svg>
            <i className="bi bi-whatsapp"></i>
          </div>
        </a>
      </div>
      <div className="fixed bottom-0 flex w-full text-center text-white lg:hidden ">
        <a
          href="https://api.whatsapp.com/send?phone=918209514612"
          title="Whatsapp"
          target="_blank"
          className="bg-[#075E54] p-4 py-2 text-base font-semibold   w-full uppercase"
        >
          Whatsapp
        </a>
        <span className="w-full p-4 py-2 text-base font-semibold uppercase bg-blue-900">
          <Link
            href="/#contact"
            passHref={true}>
            Contact Us
          </Link>
        </span>
      </div>
      <div onClick={(top)} className="fixed hidden bottom-8 right-8 lg:block">
        <div className="p-3 rounded-full relative inline-flex group items-center justify-center cursor-pointer bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] overflow-hidden">
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-white rounded-full group-hover:w-16 group-hover:h-16 opacity-10"></span>
          <BsChevronUp className="text-white transition-all duration-200 ease-out" size={16} />
        </div>
      </div>
    </main>
  );
}
