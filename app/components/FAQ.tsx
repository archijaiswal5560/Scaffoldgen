"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is the ScaffoldingGen CLI Tool?",
    answer:
      "It’s a command-line tool that helps developers scaffold project structures quickly.",
  },
  {
    question: "How do I install the ScaffoldingGen CLI Tool?",
    answer: "Run `npm install -g scaffoldinggen-cli` in your terminal.",
  },
  {
    question: "What features does the ScaffoldingGen CLI Tool have?",
    answer:
      "It supports templates, quick config setup, and project structure automation.",
  },
  {
    question: "How do I contribute to the Scaffolding CLI tool?",
    answer:
      "You can fork the GitHub repository and open a pull request with your contribution.",
  },
  {
    question: "Is the ScaffoldingGen CLI tool free to use?",
    answer: "Yes, it’s open source and completely free to use.",
  },
  {
    question: "Where can I get support?",
    answer:
      "Join the Resourcio Community or visit the GitHub Discussions page.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="text-center pb-16 px-2 sm:px-0 bg-black text-white">
      <h2 className="text-2xl font-bold mb-8">FAQ</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#0B0B0A] to-[#371D0F] rounded-xl p-5 text-left"
          >
            <button
              className="w-full flex justify-between items-center font-semibold"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <span>{openIndex === index ? "–" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-sm text-gray-400">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
