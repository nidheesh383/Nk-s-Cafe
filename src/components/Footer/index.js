import React from "react";
import "./Footer.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

const Footer = () => {
  return (
    <div>
      <footer className="footer-1 bg-gray-100 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              <h5 className="text-xl font-bold mb-6">Features</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="/#"
                    className="border-b border-solid border-transparent hover:border-darkGoldenRod hover:text-darkGoldenRod"
                  >
                    Cool stuff
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/#"
                    className="border-b border-solid border-transparent hover:border-darkGoldenRod hover:text-darkGoldenRod"
                  >
                    Random feature
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/#"
                    className="border-b border-solid border-transparent hover:border-darkGoldenRod hover:text-darkGoldenRod"
                  >
                    Team feature
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/#"
                    className="border-b border-solid border-transparent hover:border-darkGoldenRod hover:text-darkGoldenRod"
                  >
                    Stuff for developers
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/#"
                    className="border-b border-solid border-transparent hover:border-darkGoldenRod hover:text-darkGoldenRod"
                  >
                    Another one
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/#"
                    className="border-b border-solid border-transparent hover:border-darkGoldenRod hover:text-darkGoldenRod"
                  >
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
              <h5 className="text-xl font-bold mb-6">Resources</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="/#"
                    className="border-b border-solid border-transparent hover:border-darkGoldenRod hover:text-darkGoldenRod"
                  >
                    Resource
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/#"
                    className="border-b border-solid border-transparent hover:border-darkGoldenRod hover:text-darkGoldenRod"
                  >
                    Resource name
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/#"
                    className="border-b border-solid border-transparent hover:border-darkGoldenRod hover:text-darkGoldenRod"
                  >
                    Another resource
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/#"
                    className="border-b border-solid border-transparent hover:border-darkGoldenRod hover:text-darkGoldenRod"
                  >
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">About</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="/#"
                    className="border-b border-solid border-transparent hover:border-darkGoldenRod hover:text-darkGoldenRod"
                  >
                    Team
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/#"
                    className="border-b border-solid border-transparent hover:border-darkGoldenRod hover:text-darkGoldenRod"
                  >
                    Locations
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/#"
                    className="border-b border-solid border-transparent hover:border-darkGoldenRod hover:text-darkGoldenRod"
                  >
                    Privacy
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/#"
                    className="border-b border-solid border-transparent hover:border-darkGoldenRod hover:text-darkGoldenRod"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">Help</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="/#"
                    className="border-b border-solid border-transparent hover:border-darkGoldenRod hover:text-darkGoldenRod"
                  >
                    Support
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/#"
                    className="border-b border-solid border-transparent hover:border-darkGoldenRod hover:text-darkGoldenRod"
                  >
                    Help Center
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/#"
                    className="border-b border-solid border-transparent hover:border-darkGoldenRod hover:text-darkGoldenRod"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
              <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
                Stay connected
              </h5>
              <div className="flex sm:justify-center xl:justify-start">
                <a
                  href="/"
                  className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
                >
                  <FacebookOutlinedIcon />
                </a>

                <a
                  href="/"
                  className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="/"
                  className="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
                >
                  <GoogleIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
            <div className="sm:w-full px-4 md:w-1/6">
              <strong>NK's Cafe</strong>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
              <h6 className="font-bold mb-2">Address</h6>
              <address className="not-italic mb-4 text-sm">
                113A, Petit Canal Street
                <br />
                Pondicheery, India
              </address>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
              <h6 className="font-bold mb-2">Free Resources</h6>
              <p className="mb-4 text-sm">
                Use our HTML blocks for <strong>FREE</strong>.<br />
                <em>All are MIT License</em>
              </p>
            </div>
            <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
              <button className="px-4 py-2 bg-darkGoldenRod hover:bg-gray-600 rounded text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
