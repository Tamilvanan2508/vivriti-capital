import React from "react";
import {
  companyInfoLinks,
  customerCareLinks,
  helpSupportLinks,
  legalLinks,
  paymentMethods,
  platformLinks,
  socialLinks,
} from "../../static";

function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-600">
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2">
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 text-center md:text-left mb-6">
                <h5 className="uppercase mb-6 font-bold text-black">
                  Company Info
                </h5>
                <ul>
                  {companyInfoLinks.map((link, index) => (
                    <li key={index} className="mt-2">
                      <a
                        href={link.url}
                        className="hover:underline text-gray-400 hover:text-gray-500"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 text-center md:text-left mb-6">
                <h5 className="uppercase mb-6 font-bold text-black">
                  Help & Support
                </h5>
                <ul>
                  {helpSupportLinks.map((link, index) => (
                    <li key={index} className="mt-2">
                      <a
                        href={link.url}
                        className="hover:underline text-gray-400 hover:text-gray-500"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 text-center md:text-left mb-6">
                <h5 className="uppercase mb-6 font-bold text-black">
                  Customer Care
                </h5>
                <ul>
                  {customerCareLinks.map((link, index) => (
                    <li key={index} className="mt-2">
                      <a
                        href={link.url}
                        className="hover:underline text-gray-400 hover:text-gray-500"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-wrap justify-between">
              <div className="w-full lg:w-1/2 text-center md:text-left mb-6">
                <h5 className="uppercase mb-6 font-bold text-black">Socials</h5>
                <div className="flex justify-center md:justify-start mb-4">
                  {socialLinks.map((item, index) => (
                    <a key={index} href={item.url} className="mr-4 text-xl">
                      <item.icon />
                    </a>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2 text-center md:text-left mb-6">
                <h5 className="uppercase mb-6 font-bold text-black">
                  Platforms
                </h5>
                <div className="flex justify-center md:justify-start mb-6">
                  {platformLinks.map((item, index) => (
                    <a key={index} href={item.url} className="mr-4 text-xl">
                      <item.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full text-center md:text-left mb-6 flex flex-col md:flex-row items-center">
              <input
                type="text"
                placeholder="Your email"
                className="w-full py-2 px-4 mb-2 md:mb-0 border border-gray-800 focus:outline-none focus:border-orange-500"
              />
              <button className="flex-shrink-0 bg-gray-800 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline ml-4">
                Sign Up
              </button>
            </div>
            <p className="text-center md:text-left text-gray-600">
              By clicking the subscribe button, you are agreeing to our{" "}
              <a href="/privacy-policy" className="text-blue-600 underline">
                Privacy & Cookie policy
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-1/2 flex flex-col">
            <p className="text-left text-gray-600">
              © 2010-2024 All Rights Reserved.
            </p>
            <div className="flex flex-wrap mt-4 justify-center">
              {legalLinks.map((link, index) => (
                <div key={index} className="flex justify-center">
                  <a
                    href={link.url}
                    className="underline text-sm mr-4 mb-2 text-gray-600"
                  >
                    {link.text}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-center md:text-left mb-6">
            <h5 className="uppercase mb-4 font-bold text-black mt-3 md:mt-0">
              We Accept
            </h5>
            <div className="flex flex-wrap justify-center md:justify-start mb-6">
              {paymentMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.url}
                  className="mr-4 text-xl mb-2 mt:mb-0"
                >
                  <method.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
