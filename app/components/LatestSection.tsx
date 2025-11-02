export default function LatestSection() {
  return (
    <section className="relative sm:px-10 text-white ">
      <div className="absolute "></div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className=" rounded-lg p-2 ">
            <h2 className="text-xl font-semibold mb-3">Latest Download</h2>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              The latest version of our CLI tool is now available for download
              on Linux. Get the latest features and improvements by downloading
              the latest release.
            </p>
            <button className="px-2 py-1 bg-[#FA6C25] hover:bg-[#ff7e3a] text-white font-semibold rounded transition-all">
              Download for Linux
            </button>
          </div>

          <div className=" rounded-lg p-3 ">
            <h2 className="text-xl font-semibold ">Latest Release</h2>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Check out the latest release of our CLI tool, packed with new
              features and improvements. See what new and get the latest
              version.
            </p>
            <button className="px-2 py-1 bg-[#FA6C25] hover:bg-[#ff7e3a] text-white font-semibold rounded transition-all">
              View Latest Release
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
