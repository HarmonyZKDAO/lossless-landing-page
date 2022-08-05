import Head from "next/head";
import Image from "next/image";
import Faq from "../components/faq";
import HowItWorks from "../components/howItWorks";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div
        className="text-4xl font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-sky-500 via-violet-500 to-purple-500
            animate-text
            "
      >
        Win by saving
      </div>
      <HowItWorks />
      <Faq />
    </div>
  );
}
