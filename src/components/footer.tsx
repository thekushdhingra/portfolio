import React from "react";
import Logo from "./logo";
import { FaYoutube, FaGithub, FaLinkedinIn, FaXTwitter, FaFileCode, FaCode } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
    const SocialButton = ({ children, href }: { children: React.ReactNode, href: string }) => {
        return (
            <Link target="_blank" className="flex cursor-hover flex-row text-3xl items-center text-gray-300 hover:text-white transition-colors duration-200" href={href}>
                {children}
            </Link>
        );
    }
    return (
        <footer className="w-[100vw] h-fit p-20 items-center justify-center mt-7 bg-gradient-to-b from-[#0002] to-black flex flex-row">
            <div className="text-6xl smol:flex flex-col hidden w-full">
                <Logo />
                <em className="text-sm text-gray-300 mt-1">Living to code</em>
            </div>
            <div className="flex flex-col w-full items-center justify-center text-gray-50">
                <p className="text-white bold text-2xl flex flex-row items-center justify-center gap-2">Made with <FaCode /> By Kush</p>
                <div>
                    <div className="flex flex-row gap-3 p-2 h-fit">
                        <SocialButton href="https://github.com/thekushdhingra"><FaGithub /></SocialButton>
                        <SocialButton href="https://www.linkedin.com/in/thekushdhingra/"><FaLinkedinIn /></SocialButton>
                        <SocialButton href="https://twitter.com/thekushdhingra"><FaXTwitter /></SocialButton>
                        <SocialButton href="https://www.youtube.com/@thekushdhingra"><FaYoutube /></SocialButton>
                        <SocialButton href="/resume.pdf"><FaFileCode /></SocialButton>
                    </div>
                </div>
                <p className="text-gray-300">Copyright &copy; {new Date().getFullYear()} Kush Dhingra</p>
            </div>
        </footer>
    )
};

