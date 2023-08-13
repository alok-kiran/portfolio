import Image from "next/image";
import React, { useState } from "react";
import Logo from '../public/alok.png'
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="w-full h-24 shadow-lg bg-white font-mono">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-48 xl:px-16">
                <div className="flex flex-row">
                    <div className="flex flex-row items-center justify-between">
                        <Link href={'/'}>
                            <Image
                                src={Logo}
                                alt="Logo"
                                width={50}
                                height={50}
                                className="cursor-pointer"
                                priority
                            />
                        </Link>
                        <div className="ml-2">
                            <h1 className="text-xl font-bold uppercase">Alok Kiran</h1>
                        </div>
                    </div>
                </div>
                <div className="sm:flex flex justify-between items-center">
                            <ul className="hidden sm:flex">
                                <Link href={"/"}>
                                    <li className="ml-10 uppercase font-bold">Home</li>
                                </Link>
                                <Link href={"/about"}>
                                    <li className="ml-10 uppercase font-bold">About</li>
                                </Link>
                                <Link href={"/projects"}>
                                    <li className="ml-10 uppercase font-bold">Projects</li>
                                </Link>
                                <Link href={"/contact"}>
                                    <li className="ml-10 uppercase font-bold">Contacts</li>
                                </Link>
                            </ul>
                        </div>
                <div className="md:hidden cursor-pointer pl-24" onClick={handleNav}>
                    <AiOutlineMenu size={36}/>
                </div>
            </div>
            <div className={
                menuOpen ? "fixed left-0 top-0 w-[52%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }>
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={34}/>
                    </div>
                </div>
                <div className="flex-col py-4">
                    <ul>
                        <Link href={"/"}>
                            <li onClick={()=> setMenuOpen(false)} className="py-2 cusrsor-pointer uppercase font-bold">
                                Home
                            </li>
                        </Link>
                        <Link href={"/about"}>
                            <li onClick={()=> setMenuOpen(false)} className="py-2 cusrsor-pointer uppercase font-bold">
                                About
                            </li>
                        </Link>
                        <Link href={"/projects"}>
                            <li onClick={()=> setMenuOpen(false)} className="py-2 cusrsor-pointer uppercase font-bold">
                                Projects
                            </li>
                        </Link>
                        <Link href={"/contact"}>
                            <li onClick={()=> setMenuOpen(false)} className="py-2 cusrsor-pointer uppercase font-bold">
                                Contacts
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="flex flex-row justify-around pt-2 items-center">
                    <Link href={"https://github.com/alok-kiran"} target="_blank">
                        <AiOutlineGithub size={48} className="hover:bg-slate-300" />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/alokkiran/"} target="__blank">
                        <AiOutlineLinkedin size={48} className=" hover:bg-slate-300" />
                    </Link>
                    <Link href={"https://www.instagram.com/alok_.kushwaha/"} target="___blank">
                        <AiOutlineInstagram size={48} className="hover:bg-slate-300" />
                    </Link>
                    <Link href={"https://www.facebook.com/alok.kiran3"} target="___blank">
                        <AiOutlineFacebook size={48} className="hover:bg-slate-300" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;