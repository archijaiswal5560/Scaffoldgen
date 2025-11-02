"use client";
import Image from "next/image";

export default function FeatureGrid() {
  return (
    <section className="relative bg-black text-white pt-40 pb-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(250,108,37,0.2)_0%,_transparent_70%)] blur-3xl"></div>

      {/* Cross Lines */}
      <div className="relative flex items-center justify-center min-h-[90vh]">
        <div className="absolute w-[2px] h-full bg-gradient-to-b from-transparent via-[#FA6C25]/40 to-transparent"></div>
        <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-[#FA6C25]/40 to-transparent"></div>

        {/* Center Circle */}
        <div className="relative w-16 h-16 sm:w-16 sm:h-16 bg-black border border-[#FA6C25]/50 rounded-full flex items-center justify-center z-10 shadow-[0_0_30px_rgba(250,108,37,0.3)]">
          <Image
            src="/assets/middle logo.png"
            alt="Center Icon"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Top Left */}
        <div className="absolute flex flex-col items-center text-center w-60 sm:w-72 p-4 sm:p-6 -translate-x-[70%] -translate-y-[70%]">
          <FeatureText
            icon="/assets/language.png"
            title="Multi-Template & Multi-Language Support"
            desc="Enables developers to work across different technology stacks with a unified command interface."
          />
        </div>

        {/* Top Right */}
        <div className="absolute flex flex-col items-center text-center w-60 sm:w-72 p-4 sm:p-6 translate-x-[70%] -translate-y-[70%]">
          <FeatureText
            icon="/assets/interactive.png"
            title="Interactive Configuration & Prompting"
            desc="Provides a user-friendly experience and minimizes errors from manual configuration."
          />
        </div>

        {/* Bottom Left */}
        <div className="absolute flex flex-col items-center text-center w-60 sm:w-72 p-4 sm:p-6 -translate-x-[70%] translate-y-[70%]">
          <FeatureText
            icon="/assets/component.png"
            title="Component & Module Generation"
            desc="Significantly speeds up repetitive coding tasks and enforces best practices."
          />
        </div>

        {/* Bottom Right */}
        <div className="absolute flex flex-col items-center text-center w-60 sm:w-72 p-4 sm:p-6 translate-x-[70%] translate-y-[70%]">
          <FeatureText
            icon="/assets/pipeline.png"
            title="Extensible Post-Processing Pipeline"
            desc="Delivers a fully functional, ready-to-code project immediately after generation."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureText({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="flex flex-col items-center gap-3 group transition-all duration-500"
    >
      {/* Icon Glow Box */}
      <div
        className="relative w-16 h-16 flex items-center justify-center rounded-xl 
        border border-[#FA6C25]/30 bg-[#1a1a1a]/60 transition-all duration-500 
        group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(250,108,37,0.6)] 
        group-hover:border-[#FA6C25]/70"
      >
        <Image
          src={icon}
          alt={title}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>

      {/* Text */}
      <h3 className="text-base font-semibold mt-3 group-hover:text-[#FA6C25] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
