import React from "react";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0B0B0A] text-gray-400">
      <div className="max-w-[1840px] mx-auto px-12 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="space-y-3 sm:space-y-20">
          <div className="flex items-center gap-2">
            <img
              src="/assets/Union.png"
              alt="ScaffoldGen Logo"
              className="w-9 h-9 object-contain"
            />
            <h1 className="text-white text-2xl font-semibold tracking-tight">
              ScaffoldGen
            </h1>
          </div>
          <p className="text-sm text-gray-500 tracking-wide">
            © 2024 ScaffoldGenCLI. All rights reserved.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-white font-semibold text-lg tracking-wide">
            Quick Links
          </h2>
          <ul className="space-y-2 text-[15px]">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Downloads
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Releases
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-white font-semibold text-lg tracking-wide">
            Connect with Us
          </h2>
          <ul className="space-y-2 text-[15px]">
            <li className="flex items-center gap-2">
              <FaLinkedin className="text-gray-400 group-hover:text-white transition-colors duration-200" />
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaGithub className="text-gray-400 group-hover:text-white transition-colors duration-200" />
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaDiscord className="text-gray-400 group-hover:text-white transition-colors duration-200" />
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
