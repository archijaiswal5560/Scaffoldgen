import React from "react";

const Organizations = () => {
  const orgs = [
    {
      name: "Resourcio Community",
      image: "/assets/language.png",
      link: "https://resourcio.com",
    },
  ];

  return (
    <section className="text-center pb-12 px-2 sm:px-0 bg-black text-white">
      <h2 className="text-3xl font-bold mb-8">Organizations</h2>
      <div className="flex justify-center gap-6">
        {orgs.map((org, index) => (
          <a
            key={index}
            href={org.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#0B0B0A]/50 to-[#371D0F] rounded-xl p-6 hover:scale-105 transition-transform duration-200 w-72"
          >
            <img
              src={org.image}
              alt={org.name}
              className="w-16 h-16 mx-auto mb-4 rounded-full"
            />
            <p className="font-medium">{org.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Organizations;
