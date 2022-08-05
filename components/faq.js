import Head from "next/head";
import Image from "next/image";

import { Twitter, GitHub, ChevronDown } from "react-feather";

import styles from "../styles/Faq.module.css";

export default function Faq() {
  const faqs = [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
  ];

  return (
    <div className="bg-fuchsia-900 px-2">
      <div className="mx-auto my-20 lg:w-6/12 rounded-md py-8">
        <h1 className="text-2xl text-center text-white mb-10">
          FAQ
        </h1>

        <div className="space-y-2">
          <details className="duration-300">
            <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer rounded-lg border-2 flex justify-between">
              <span className="select-none">Question 1</span>
              <ChevronDown />
            </summary>
            <div className="px-5 py-3 text-sm font-light">
              <p>Answer 1</p>
            </div>
          </details>

          <details className="duration-300">
            <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer rounded-lg border-2 flex justify-between">
              <span className="select-none">Question 2</span>
              <ChevronDown />
            </summary>
            <div className="px-5 py-3 text-sm font-light">
              <p>Answer 2</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
