import React from "react";
import Logo from "./logo";
import { JetBrains_Mono } from "next/font/google";
import {
  FaYoutube,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaFileCode,
} from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  const SocialButton = ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => {
    return (
      <Link
        target="_blank"
        className="flex cursor-hover flex-row text-3xl items-center hover:text-white duration-200"
        href={href}
      >
        {children}
      </Link>
    );
  };
  return (
    <footer className="w-[100vw] beeg:h-[40vh] h-[20vh] p-20 items-center justify-center flex flex-row">
      <div className="text-6xl beeg:flex flex-col hidden w-full">
        <Logo />
        <em className="text-sm text-gray-300 mt-1">Living to code</em>
      </div>
      <div className="flex flex-col w-full items-center justify-center text-gray-50">
        <p className=" bold text-2xl flex flex-row items-center justify-center gap-2 text-center">
          Made with &#123;&#125; By Kush
        </p>
        <div>
          <div className="flex flex-row gap-3 p-2 h-fit text-center">
            <SocialButton href="https://github.com/thekushdhingra">
              <FaGithub />
            </SocialButton>
            <SocialButton href="https://www.linkedin.com/in/thekushdhingra/">
              <FaLinkedinIn />
            </SocialButton>
            <SocialButton href="https://twitter.com/thekushdhingra">
              <FaXTwitter />
            </SocialButton>
            <SocialButton href="https://www.youtube.com/@thekushdhingra">
              <FaYoutube />
            </SocialButton>
            <SocialButton href="/resume.pdf">
              <FaFileCode />
            </SocialButton>
          </div>
        </div>
        <p className="text-center">
          Copyright &copy; {new Date().getFullYear()} Kush Dhingra
        </p>
      </div>
    </footer>
  );
}
