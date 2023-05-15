import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {

    return (
        <nav className="bg-bgHome sticky top-0 flex shadow-md " style={{ fontFamily: 'Raleway, sans-serif' }}>
            <div className="flex items-center mr-4 text-4xl text-logo px-10 p-1">
                <Image src="/logoimage/logowhite4.jpg" alt="Logo" width={120} height={40} />
                <p className="">G.E.M.A</p>
            </div>

            <ul className="flex  items-center w-full m-4 justify-center font-medium text-xl">

                <li className="mr-4 hover:text-logo">
                    <Link href="/home">-Home-</Link>
                </li>
                <li className="mr-4 hover:text-logo">
                    <Link href="/Agenda">-Agenda-</Link>
                </li>
                <li className="mr-4 hover:text-logo">
                    <Link href="/AboutUs">-About Us-</Link>
                </li>
                <li className="mr-4 hover:text-logo">
                    <Link href="/Perfil">-Perfil WP-</Link>
                </li>
                </ul>
                <div className="flex justify-center items-center p-1 font-bold">
                <Link href="/Login"><div className="rounded-md flex items-center bg-buttonBlue hover:bg-logo w-24 h-12 justify-center">
                        <button>Login</button>
                </div></Link>
                </div>
            <div className="flex justify-center items-center p-1 font-bold">
                <div className="rounded-md flex items-center bg-logo hover:bg-buttonBlue w-24 h-12 justify-center">
                    LogOut
                </div>
            </div>
            
        </nav>
    )
}
