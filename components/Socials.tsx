import Link from "next/link";
import React from "react";
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'

const Socials = () => {
    return (
        <div className="sm:flex flex-col justify-between items-center hidden w-[64px] h-[240px] p-2 bg-white shadow-sm rounded-r-md">
            <Link href={"https://github.com/alok-kiran"} target="_blank">
                <AiOutlineGithub size={48} className="hover:bg-slate-300"/>
            </Link>
            <Link href={"https://www.linkedin.com/in/alokkiran/"} target="__blank">
                <AiOutlineLinkedin size={48} className=" hover:bg-slate-300"/>
            </Link>
            <Link href={"https://www.instagram.com/alok_.kushwaha/"} target="___blank">
                <AiOutlineInstagram size={48} className="hover:bg-slate-300"/>
            </Link>
            <Link href={"https://www.facebook.com/alok.kiran3"} target="___blank">
                <AiOutlineFacebook size={48} className="hover:bg-slate-300"/>
            </Link>
        </div>
    )
}

export default Socials;