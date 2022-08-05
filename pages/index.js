import Head from "next/head";
import Image from "next/image";
import Faq from "../components/faq";
import HowItWorks from "../components/howItWorks";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className="px-2 space-y-5">

      <div
        className="text-4xl font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-sky-500 via-violet-500 to-purple-500
            animate-text
            "
      >
        Win by saving
      </div>
      <div className="lg:w-96">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
      </div>
      </div>

      <HowItWorks />
      <div className="text-center">
        More content
      </div>
      <Faq />
    </div>
  );
}
