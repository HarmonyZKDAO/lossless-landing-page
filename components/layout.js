import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import Script from "next/script";
import "@fontsource/roboto";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <title>Lossless</title>
        <meta name="title" content="Lossless" />
        <meta name="description" content="Lossless Landing Page" />
        <meta name="theme-color" content="#22d3ee" />
      </Head>
      <div className="flex flex-col min-h-screen px-2 bg-slate-900 text-slate-300">
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
}
