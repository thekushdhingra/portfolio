import React, { useEffect, useState } from "react";
import { CiAt } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import Link from "next/link";
import Logo from "./logo";

function CustomLink({ children, href, className }: { children: React.ReactNode; href: string; className: string }) {
    const [current, setCurrent] = useState("");

    useEffect(() => {
        // Only runs on the client
        setCurrent(window.location.pathname);
    }, []);

    return (
        <Link href={href}>
            <div className={`${className} ${current === href ? 'bg-[#fff2]' : ''}`}>
                {children}
            </div>
        </Link>
    );
}

function Socials() {
    const [open, setOpen] = useState(false);

    const Social = ({ children, href }: { children: React.ReactNode, href: string }) => {
        return (
            <CustomLink className="flex flex-row items-center text-gray-300 hover:text-white transition-colors duration-200" href={href}>
                {children}
            </CustomLink>
        );
    };

    return (
        <>
            <div className="flex flex-row items-center gap-2">
                <button onClick={() => setOpen(!open)} className="px-4 aspect-square py-2 rounded-full bg-[#fff1] backdrop-blur-lg flex flex-row items-center">
                    {open ? <GrClose/> : <CiAt/>}
                </button>
                <div className={`${open ? "scale-100 opacity-100" : "scale-0 opacity-0"} origin-top-right transition-all duration-300 absolute space-y-2 top-10 right-16 bg-[#fff1] backdrop-blur-lg p-4 pl-6 pr-6 rounded-lg shadow-[0_10px_20px_#00000080]`}>
                    <Social href="">Linkedin</Social>
                    <Social href="">Github</Social>
                    <Social href="/resume.pdf">Resume</Social>
                </div>
            </div>
        </>     
    )
}

export default function Navbar() {
    return (
        <>
            <div className="z-50 w-[100vw] fixed top-[1rem] left-0 mt-1 flex flex-row items-center justify-between pl-4 pr-4">
                <div className="backdrop-blur-lg p-2 rounded-md">
                    <div className="smol:flex hidden">
                        <p className="font-bold text-1xl text-white">Kush Dhingra</p>
                        <p className="text-[10px] text-gray-200">Web Developer</p>
                    </div>
                    <div className="smol:hidden flex">
                        <Logo />
                    </div>
                </div>
                <nav className="z-50 fixed left-1/2 translate-x-[-150%] flex w-fit top-[1.3rem] shadow-xl shadow-black/30 768:fixed max-480:fixed max-480:left-1/2 max-480:-translate-x-1/2 p-1 gap-x-2 768:left-1/2 768:-translate-x-1/2 border-white/10 duration-300 border-[1px] bg-transparent rounded-full backdrop-blur-md ml-40">
                    <CustomLink href="/" className="px-4 py-2 rounded-full hover:bg-[#fff2] transition-colors duration-100">Work</CustomLink>
                    <CustomLink href="/info" className="px-4 py-2 rounded-full hover:bg-[#fff2] transition-colors duration-100">Info</CustomLink>
                </nav>
                <Socials />
            </div>  
        </>
    )
}
