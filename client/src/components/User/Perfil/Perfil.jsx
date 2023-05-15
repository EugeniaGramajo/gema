import Image from "next/image"
import React from "react"


export default function Perfil(){
    return(
        <>
        <div className="bg-white h-[80vh] flex justify-center items-center mx-64">
            
        
       <div className="flex-col items-center justify-center">
        <div className="border-2 rounded-full border-black items-center justify-center flex h-40">
                <Image src="/logoimage/logowhite4.jpg" alt="Logo" width={120} height={40} />
            </div>
        <p>Nombre:</p>
        <input className="border-2"></input>
        <p>Email:</p>
        <input className="border-2"></input>
        <p>no se que mas puta poner</p> 
        <p>cambiar password</p>
        <p>cambiar imagen</p>
        
        </div>
        </div>
        </>
    )
}