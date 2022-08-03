import Head from "next/head";
import Image from "next/image";

import { Twitter, GitHub } from "react-feather";

export default function Header() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-5 px-2">
      <div className="pt-3 pb-5 flex justify-center items-center space-x-5">
        <span>Community</span>

        <a
          href="https://"
          title="Github Profile"
          target="_blank"
          rel="noreferrer noopener nofollow"
          className="p-3 hover:bg-gray-800 rounded-lg text-indigo-500 transition-all"
        >
          <GitHub />
        </a>
        <a
          href="https://"
          title="Twitter Profile"
          target="_blank"
          rel="noreferrer noopener nofollow"
          className="p-3 hover:bg-gray-800 rounded-lg text-indigo-500 transition-all"
        >
          <Twitter />
        </a>
      </div>
      <div className="pt-5 border-t-2 border-indigo-900 flex items-center justify-center">
        <div className="text-center py-3">
          <span className="flex justify-center items-center space-x-1">
            <small>Copyright &copy; {year} Lossless. All Rights Reserved.</small>
          </span>
        </div>
      </div>
    </footer>
  );
}
