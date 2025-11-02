"use client";
import Image from "next/image";

export default function AboutCLI() {
  return (
    <section className="relative sm:px-10 bg-black text-white pb-24 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(250,108,37,0.15)_0%,_transparent_70%)] blur-3xl"></div>

      <div className="relative z-10 max-w-7xl w-full mx-auto ">
        <div className="rounded-3xl bg-[#0a0a0a] shadow-[0_60px_60px_rgba(54,28,15,0.7)] backdrop-blur-sm p-10 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-lg sm:text-[37px]  font-bold leading-tight">
                About ScaffoldGen CLI
              </h1>
              <p className="text-gray-400  text-sm md:text-lg leading-relaxed">
                Our CLI tool is a powerful and versatile command-line interface
                that helps developers streamline their workflow and boost their
                productivity. With a wide range of features and customization
                options, it’s the perfect tool for any developer looking to
                optimize their development process.
              </p>

              <button className="px-6 py-3 bg-[#FA6C25] hover:bg-[#f87939] text-white font-semibold rounded-md transition-all duration-300 ">
                Learn More
              </button>
            </div>

            <div className="relative w-full max-w-lg mx-auto md:mx-0">
              <div className="absolute -top-12 -left-7 w-full h-full bg-[#1F1F1F] rounded-2xl opacity-80"></div>

              <div className="relative rounded-2xl overflow-hidden border border-[#2a2a2a] bg-[#0d0d0d]/95 ]">
                <div className="flex items-center justify-between px-4 py-3 bg-[#131920] border-b border-[#2a2a2a]">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  </div>
                  <span className="text-sm text-gray-400 font-mono">
                    scaffoldgen
                  </span>
                </div>

                <div className="px-6 py-6 font-mono text-sm space-y-2">
                  <p className="text-[#34D399]">
                    ~{" "}
                    <span className="text-[#D1CD74] ml-2">
                      cd <span className="text-gray-300">web_development</span>
                    </span>
                  </p>
                  <p className="text-[#34D399]">
                    ~{" "}
                    <span className="text-[#D1CD74] ml-2">
                      scaffoldgen new **my-awesome-app** --template next
                    </span>
                  </p>
                  <p className="text-[#34D399]">
                    ~{" "}
                    <span className="text-[#D1CD74] ml-2">
                      scaffoldgen generate **component** UserProfile --t
                    </span>
                  </p>
                  <p className="text-[#34D399]">
                    ~{" "}
                    <span className="text-[#D1CD74] ml-2">
                      scaffoldgen create **route** auth --handler **log**
                    </span>
                  </p>
                  <p className="text-[#34D399]">
                    ~{" "}
                    <span className="text-[#D1CD74] ml-2">
                      scaffoldgen config set **default-lang** python
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
