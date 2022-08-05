import Head from "next/head";
import Image from "next/image";

import { Twitter, GitHub, ChevronDown } from "react-feather";

export default function Faq() {
  const faqs = [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
  ];

  return (
    <div>
      <div className="text-2xl lg:text-3xl uppercase">FAQ</div>
    </div>
  );
}
