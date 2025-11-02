import Image from "next/image";

export default function GlobalUsers() {
  return (
    <section className="relative bg-black text-white px-2 sm:px-10 pb-24 pt-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(250,108,37,0.1)_0%,_transparent_70%)] blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl  text-left">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest mb-2">
            Our Solutions
          </p>
          <h2 className="text-3xl md:text-3xl font-semibold">Global Users</h2>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-5xl rounded-[30px] bg-[#2B2623]/70 backdrop-blur-lg overflow-hidden p-6 border border-[#FA6C25]/10 shadow-[0_0_60px_rgba(250,108,37,0.15)]">
            <Image
              src="/assets/mobile.png"
              alt="Global Users"
              width={1200}
              height={700}
              className="object-contain mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
