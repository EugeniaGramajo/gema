import React from "react";
import ToDo from "./ToDo/ToDo";

export default function Agenda() {
    return (
        <div className="container mx-auto p-16 bg-agenda shadow-lg">
            <h1 className="text-2xl font-bold mb-10 text-center">Mi plan para hoy</h1>

            <div className="grid grid-cols-7 gap-4 mb-4 bg-cyan-200 text-center">
                <h1>Lunes</h1>
                <h1>Martes</h1>
                <h1>Miercoles</h1>
                <h1>Jueves</h1>
                <h1>Viernes</h1>
                <h1>Sabado</h1>
                <h1>Domingo</h1>
            </div>
            <button className="bg-buttonBlue w-10 h-10">EDIT</button>
            <div className=" border-2 w-full">

                <div className=" mb-4 ml-20 mt-5 items-center">
                    <div className="p-1 ml-2">1:<input className="w-96 h-10" /></div>
                    <div className="p-1 ml-2">2:<input className="w-96 h-10" /></div>
                    <div className="p-1 ml-2">3:<input className="w-96 h-10" /></div>
                    <div className="p-1 ml-2">4:<input className="w-96 h-10" /></div>
                    <div className="p-1 ml-2">5:<input className="w-96 h-10" /></div>
                    <div className="p-1 ml-2">6:<input className="w-96 h-10" /></div>
                    <div className="p-1 ml-2">7:<input className="w-96 h-10" /></div>
                    <div className="p-1 ml-2">8:<input className="w-96 h-10" /></div>
                    <div className="p-1 ml-2">9:<input className="w-96 h-10" /></div>
                    <div className="p-1 ">10:<input className="w-96 h-10" /></div>
                    <div className="p-1 ">11:<input className="w-96 h-10" /></div>
                    <div className="p-1 ">12:<input className="w-96 h-10" /></div>
                    <div className="p-1 ">13:<input className="w-96 h-10" /></div>
                    <div className="p-1 ">14:<input className="w-96 h-10" /></div>
                    <div className="p-1 ">15:<input className="w-96 h-10" /></div>
                    <div className="p-1 ">16:<input className="w-96 h-10" /></div>
                    <div className="p-1 ">17:<input className="w-96 h-10" /></div>
                    <div className="p-1 ">18:<input className="w-96 h-10" /></div>
                    <div className="p-1 ">19:<input className="w-96 h-10" /></div>
                    <div className="p-1 ">20:<input className="w-96 h-10" /></div>
                    <div className="p-1">21:<input className="w-96 h-10" /></div>
                    <div className="p-1" >22:<input className="w-96 h-10" /></div>
                    <div className="p-1 ">23:<input className="w-96 h-10" /></div>
                </div>
<div className=" w-96 text-center">
                <div className="mb-4">
                    <div className="items-center w-full mt-4 mb-4">
                    <h2 className="text-lg font-bold mb-2">Mi objetivo principal</h2>
                    <div className="items-center">
                    <div className="p-1"><input className="w-full h-10" /></div>
                    <div className="p-1"><input className="w-full h-10" /></div>
                    <div className="p-1"><input className="w-full h-10" /></div>
                    </div>
                    </div>
                    <div className="mb-4 ">
                        <div className=" items-center">
                            <h2 className="text-lg font-bold mb-2 ">Prioridades</h2></div>
                        <table className="table-auto">
                            <thead>
                                <tr className="text-center">
                                    <th className="px-4 py-2">Prioridad</th>
                                    <th className="px-4 py-2">Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2">Alta</td>
                                    <td className="px-4 py-2"><input type="text" className="w-80 h-10" /></td>
                                </tr>
                                <tr>
                                <td className="px-4 py-2">Media</td>
                                <td className="px-4 py-2"><input type="text" className="w-80 h-10" /></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Baja</td>
                                    <td className="px-4 py-2"><input type="text" className="w-80 h-10" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
</div>
            </div>




            <div>
                <ToDo />
            </div>

        </div>
    );
}
