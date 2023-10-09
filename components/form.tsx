import Link from 'next/link';
import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Contact extends Component {



  componentDidMount() {
    document.title = "Contact us"
    AOS.init();
  }

  render() {

    return (

      <div className=" w-full grid lg:grid-cols-2 md:grid-cols-1  px-10 py-10">
      <div>
        <label className='flex'>First Name</label>
        <input type="text" className="w-3/4 mt-0.5 pr-3 bg-none border-b focus:outline-none border-gray-400" placeholder="First name" />
      </div>
      <div>
        <label className='flex md:mt-2 lg:mt-0'>Last Name</label>
        <input type="text" className="w-3/4 mt-0.5 pr-3 bg-none border-b focus:outline-none border-gray-400" placeholder="Last name" />
      </div>
      <div className='md:mt-2'>
        <label>Email</label>
        <div>
          <input type="text" className="w-3/4 mt-0.5 pr-3 bg-none border-b focus:outline-none border-gray-400" placeholder="Email" />
        </div>
      </div>
      <div className='md:mt-2'>
        <label>Phone Number</label>
        <input type="text" className="w-full mt-0.5 pr-3 bg-none border-b focus:outline-none border-gray-400" placeholder="Phone number" />
      </div>
      <div className='md:mt-2'>
        <label>Message</label>
        <textarea id="message" rows={1} placeholder="Message" className=" focus:outline-none w-full border-b border-gray-400 pr-2 py-1" />
        <button className="bg-black text-white mt-10 px-4 py-2 rounded">Send Message</button>
      </div>
    </div>

    );
  }
}
export default Contact;
