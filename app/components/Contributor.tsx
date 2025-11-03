import Image from "next/image";

export default function MajorContributors() {
  const contributors = [
    {
      name: "Archi",
      role: "Core Contributor",
      image: "/assets/avatar.png",
    },
    {
      name: "Archi",
      role: "Core Contributor",
      image: "/assets/avatar.png",
    },
    {
      name: "Archi",
      role: "Core Contributor",
      image: "/assets/avatar.png",
    },
    {
      name: "Archi",
      role: "Core Contributor",
      image: "/assets/avatar.png",
    },
  ];

  return (
    <section className="relative bg-black text-white p-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-0 text-center">
        <h2 className="text-xl md:text-3xl font-semibold mb-12">
          Major Contributors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
          {contributors.map((person, index) => (
            <div
              key={index}
              className="w-60 h-64 bg-gradient-to-l from-[#371D0F] to-[#0B0B0A] 
              rounded-md shadow-[0_0_40px_rgba(250,108,37,0.08)] 
              flex flex-col items-center justify-center transition-all duration-300 
              hover:shadow-[0_0_60px_rgba(250,108,37,0.3)]"
            >
              <div className="w-5 h-5 rounded-full overflow-hidden mb-24">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={20}
                  height={20}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="text-lg font-semibold">{person.name}</h3>
              <p className="text-gray-400 text-sm mt-1">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
