// app/components/Hero.tsx

import React from "react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[100vh] sm:min-h-[100vh] md:min-h-[450px] bg-black mt-10 sm:mt-5 overflow-hidden px-4 py-10">
      <div className="absolute top-1/3 w-[300px] sm:w-[450px] md:w-[600px] h-[150px] sm:h-[180px] md:h-[200px] bg-gradient-to-t from-orange-500/40 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 px-4">
        <h1 className="text-3xl font-[ScaffoldGen] sm:text-4xl md:text-[47.17px] font-extrabold tracking-tight text-[#FA6C25] mb-4 leading-tight">
          ScaffoldGen
        </h1>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-md sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed">
          A powerful command-line interface tool for developers, designed to
          streamline your workflow and boost productivity.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-8 w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-[#FA6C25] hover:bg-orange-600 text-white px-6 py-3 rounded-md text-sm sm:text-base transition">
            Download for Linux
          </button>
          <button className="w-full sm:w-auto border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-md text-sm sm:text-base transition">
            Download for Windows
          </button>
        </div>
      </div>
    </section>
  );
}
