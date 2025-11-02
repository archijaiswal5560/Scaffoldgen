"use client";

import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-2">
          <img
            src="/assets/Union.png"
            alt="ScaffoldGen Logo Icon"
            className="w-4 h-4 object-contain"
          />
          <img
            src="/assets/ScaffoldGen CLI.png"
            alt="ScaffoldGen CLI Text"
            className="h-4 object-contain"
          />
        </div>

        <div className="hidden md:flex items-center gap-3 text-sm">
          <a href="#" className="text-gray-300 hover:text-white transition">
            Downloads
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            Releases
          </a>
          <div className="flex border rounded-md border-[#2B2B2B] items-center gap-2 text-gray-300 hover:text-white transition cursor-pointer">
            <div className="flex items-center gap-2 relative">
              {" "}
              <input
                type="text"
                className="p-1 bg-[#0B0B0A] rounded-md"
                placeholder="Search ..."
              />{" "}
              <div className=" absolute right-2 ">
                <Search size={16} className="text-[#969696]" />
              </div>
            </div>
          </div>

          <a href="#" className="text-gray-300 hover:text-white transition">
            Docs
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            Snippet Manager
          </a>
        </div>

        <button
          className="md:hidden text-gray-300 hover:text-white transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-neutral-800">
          <div className="flex flex-col items-center gap-4 py-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition">
              Downloads
            </a>
            <a href="#" className="hover:text-white transition">
              Releases
            </a>
            <div className="flex items-center gap-2 hover:text-white transition cursor-pointer">
              <Search size={14} /> Search
            </div>
            <a href="#" className="hover:text-white transition">
              Docs
            </a>
            <a href="#" className="hover:text-white transition">
              Snippet Manager
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
