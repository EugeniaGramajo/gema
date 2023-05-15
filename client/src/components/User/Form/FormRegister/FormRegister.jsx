import { validacionEmail, validacionPassword } from "@/components/Logic";
import Image from "next/image";
import React, { useState } from "react";

export default function FormRegister() {

    const [state, setState] = useState({
        rePassword: "",
        reEmail: "",
        email: "",
        password: ""
    })
    const [error, setError] = useState({
        emailError:"",
        passwordError: ""
    })

    const changeHandler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }


    const handleRegister = () => {
        validacionEmail(state.email,state.reEmail,error,setError)
        validacionPassword(state.password,state.rePassword,error,setError)

        setState({
            rePassword: "",
            reEmail: "",
            email: "",
            password: ""
        })
        alert("Cosas pasaron")
/*          const userData = {
            email: email,
            password: password,
          }; 
 axios
.post("url de backend",userData)
.then(response=>{
    alert(response.data);
})
.catch(error=>{
    alert(error);
}); */  

    };
    
    return (
        <div className="flex justify-center items-center text-center h-[87vh] overflow-hidden ">
            <div className="bg-bgHome w-96 py-10 h-fit flex-col justify-center items-center border-2">
                <p className="font-medium text-xl mb-5 py-2">Bienvenidos a G.E.M.A</p>
                <p>Email:</p>
                <input type="email" className="border-2 h-9 w-3/5 text-center" placeholder="example@gmail.com" name="email" value={state.email} onChange={changeHandler}></input>
                <p>Re-Email:</p>
                <input type="email" className="border-2 h-9 w-3/5 text-center" placeholder="example@gmail.com" name ="reEmail"value={state.reEmail} onChange={changeHandler}></input>
                <p className="text-red-500">{error.emailError}</p>
                <p>Password:</p>
                <input type="password" className="border-2 h-9 w-3/5 text-center" name="password" value={state.password} onChange={changeHandler}></input>
                <p>Re-Password:</p>
                <input type="password" name="rePassword" className="border-2 h-9 w-3/5 text-center" value={state.rePassword} onChange={changeHandler}></input>
                <p className="text-red-500">{error.passwordError}</p>
                <div className="m-1">
                    <button className="bg-buttonBlue w-20 h-10 m-1" onClick={handleRegister}>Register</button>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex items-center justify-center bg-black ">
                        <div className="ml-1 w-9 h-9 mr-1 p-1 ">
                            <Image src="/logogoogle/googleicon.png" alt="logo" width={50} height={40} />
                        </div>
                        <button className="bg-logo hover:bg-buttonBlue text-white w-38 h-10 p-1">Sign In With Google</button>
                    </div>
                </div>
            </div>
        </div>
    )
}