import React from 'react';

import facebook from 'assets/icon/facebook.svg';
import instagram from 'assets/icon/instagram.svg';
import twitter from 'assets/icon/twitter.svg';
import logo from 'assets/logo.svg';

const Footer = () => (
  <div>
    <div className="grid grid-cols-1 gap-10 px-16 py-10 mx-auto bg-violet-700 lg:grid-cols-11 bg-opacity-80 xl:px-32">
      <div className="lg:col-span-3 ">
        <img src={logo} alt="META PLACE" />
      </div>
      <div className="lg:col-span-2">
        <p className="pb-5 text-xl text-white">ABOUT</p>
        <a href="/about" className="text-sm text-white">
          About Us
        </a>

        <a href="/contract" className="text-sm text-white">
          Contact Us
        </a>

        <a href="privacy" className="text-sm text-white">
          Privacy Notice
        </a>

        <a href="/team" className="text-sm text-white">
          Terms of Service
        </a>

        <a href="/sitemap" className="text-sm text-white">
          Site Map
        </a>
      </div>
      <div className="lg:col-span-2">
        <p className="pb-5 text-xl text-white">FOLLOW US</p>
        <div className="flex pb-5">
          <img src={twitter} alt="twitter" className="pr-2" />
          <img src={instagram} alt="instaram" className="pr-2" />
          <img src={facebook} alt="facebook" />
        </div>
        <p className="text-sm text-white">
          California - Do Not Sell My Info <br />
          QuinStreet, Inc, 950 Tower Lane, <br />
          6th Floor, Foster City, CA 94404
        </p>
      </div>
      <div className="lg:col-span-2">
        <p className="pb-5 text-xl text-white">SIGN UP</p>
        <div className="flex">
          <input
            type="text"
            placeholder="example@mail.com"
            className="p-2 text-sm text-white bg-black border-transparent bg-opacity-40 rounded-l-md"
          />
          <button type="button" className="p-2 text-sm text-white border rounded-r-md">
            Send
          </button>
        </div>
      </div>
      <div className="lg:col-span-2">
        <p className="pb-5 text-xl text-white">LINKS</p>
      </div>
    </div>
    <div className="px-16 py-10 mx-auto bg-blue-800 xl:px-32 bg-opacity-90">
      <p className="pl-10 text-sm text-gray-100">Copyright © 1984-2021 Quinstreet, Inc. </p>
    </div>
  </div>
);

export default Footer;
