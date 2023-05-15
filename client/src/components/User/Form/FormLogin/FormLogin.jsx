import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function FormLogin() {
    return (
        <div className="flex justify-center items-center text-center h-[87vh] overflow-hidden">
            <div className="bg-bgHome w-96 h-fit  py-10 flex-col justify-center items-center shadow-xl rounded-md ">
                <p className="py-2 font-medium text-xl mb-5 ">Bienvenidos a G.E.M.A</p>
                <p className="">Email:</p>
                <input type="email" className="border-2 h-9 w-3/5 text-center" placeholder="example@gmail.com"></input>
                <p className="mt-3">Password:</p>
                <input type="password" className="border-2 h-9 w-3/5"></input>

                <div className="flex items-center justify-center p-2 mt-2">
                    <button className="bg-buttonBlue hover:bg-logo text-white w-20 h-10 m-2">Login</button>
                </div>
                <div className="flex justify-center items-center mb-5">
                <div className="flex items-center justify-center bg-black ">
                    <div className="ml-1 w-9 h-9 mr-1 p-1 ">
                        <Image src="/logogoogle/googleicon.png" alt="logo" width={50} height={40} />
                    </div>
                    <button className="bg-logo hover:bg-buttonBlue text-white w-38 h-10 p-1">Log In With Google</button>
                </div>
                </div>
                <p>Forgot your Password?</p>
                <Link href="/Register">
                    <p className="text-logo hover:text-buttonBlue text-lg mt-5 font-medium">Quieres unirte?</p>
                </Link>
            </div>
        </div>
    )
}