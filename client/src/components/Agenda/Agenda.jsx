import React, { useState } from "react";

export default function Agenda() {
    const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const timeSlots = Array.from(Array(24).keys());
    const [isEditMode, setIsEditMode] = useState(false);
    const [agendaData, setAgendaData] = useState({});
    const [objectives, setObjectives] = useState([""]);
    const [priorities, setPriorities] = useState([
        { priority: "", items: [""] },
    ]);

    const handleEditClick = () => {
        setIsEditMode(true);
    };

    const handleSaveClick = () => {
        setIsEditMode(false);
        // Guardar los datos de la agenda en algún lugar o realizar alguna acción con ellos
        console.log("Agenda guardada:", agendaData);
    };

    const handleInputChange = (hour, value) => {
        setAgendaData((prevData) => ({
            ...prevData,
            [hour]: value
        }));
    };

    const handleObjectiveChange = (index, value) => {
        setObjectives((prevObjectives) => {
            const updatedObjectives = [...prevObjectives];
            updatedObjectives[index] = value;
            return updatedObjectives;
        });
    };

    const handlePriorityChange = (priorityIndex, itemIndex, value) => {
        setPriorities((prevPriorities) => {
            const updatedPriorities = [...prevPriorities];
            updatedPriorities[priorityIndex].items[itemIndex] = value;
            return updatedPriorities;
        });
    };

    const addObjective = () => {
        setObjectives((prevObjectives) => [...prevObjectives, ""]);
    };

    const addItem = (priorityIndex) => {
        setPriorities((prevPriorities) => {
            const updatedPriorities = [...prevPriorities];
            updatedPriorities[priorityIndex].items.push("");
            return updatedPriorities;
        });
    };

    return (
        <div className="container mx-auto p-16 bg-agenda shadow-lg h-fit">
            <h1 className="text-2xl font-bold mb-10 text-center">Mi plan para hoy</h1>
            <div className="grid grid-cols-7 gap-4 mb-4 bg-cyan-200 text-center h-10 items-center">
                {daysOfWeek.map((day) => (
                    <h1 key={day}>{day}</h1>
                ))}
            </div>
            <button
                className={`bg-buttonBlue w-14 h-10 ${isEditMode ? 'bg-logo' : 'bg-buttonBlue'}`}
                onClick={isEditMode ? handleSaveClick : handleEditClick}
            >
                {isEditMode ? "SAVE" : "EDIT"}
            </button>
            <div className=" w-full flex justify-center">
                <div className="items-center p-4">
                    {timeSlots.map((slot) => (
                        <div className="p-2 mr-28" key={slot}>
                            {slot.toString().padStart(2, '0')}:00{" "}
                            <input
                                className={`w-96 h-10 bg-bgHome ${isEditMode ? 'bg-home' : 'bg-cyan-100'}`}
                                value={agendaData[slot] || ""}
                                onChange={(e) => handleInputChange(slot, e.target.value)}
                                disabled={!isEditMode}
                            />
                        </div>
                    ))}
                </div>
                <div className=" w-5/12 text-center">
                    <div className="m-4">
                        <div className="items-center w-full mt-4 mb-4 flex flex-col justify-center">
                            <h2 className="text-lg font-bold mb-2">Mi objetivo principal</h2>
                            <div className="items-center flex flex-col justify-center w-full">
                                <div className="p-1 w-full">
                                    <input className={`w-full h-10 bg-bgHome  ${isEditMode ? 'bg-home' : 'bg-cyan-100'}`}
                                        disabled={!isEditMode} />

                                </div><div className="p-1 w-full">
                                    <input className={`w-full h-10 bg-bgHome  ${isEditMode ? 'bg-home' : 'bg-cyan-100'}`}
                                        disabled={!isEditMode} />
                                </div>
                                {objectives.map((objective, index) => (
                                    <div className="p-1 w-full" key={index}>
                                        <input
                                            className={`w-full h-10 bg-bgHome  ${isEditMode ? 'bg-home' : 'bg-cyan-100'}`}
                                            value={objective}
                                            onChange={(e) => handleObjectiveChange(index, e.target.value)}
                                            disabled={!isEditMode}
                                        />
                                    </div>
                                ))}
                                {isEditMode && (
                                    <button className="bg-buttonBlue rounded-full flex flex-col text-white w-12 h-12 text-4xl text-center m-auto items-center" onClick={addObjective}>
                                        +
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className="mb-4 flex-col justify-center content-center items-center w-full">
                            {priorities.map((priority, priorityIndex) => (
                                <div className="items-center w-full" key={priority.priority}>
                                    <h2 className="text-lg font-bold mb-2 ">Prioridades</h2>
                                    <div className="table-auto flex flex-col justify-center items-center w-full">
                                        <div className="text-center">
                                            <div className="px-4 py-2">-Descripción-</div>
                                        </div>
                                        <div className="w-full flex flex-col justify-center items-center">
                                            <div className="w-full">
                                                <div className="px-4 py-2 w-full items-center flex">
                                                    <input
                                                        type="text"
                                                        className={`w-full h-10 bg-bgHome  ${isEditMode ? 'bg-home' : 'bg-cyan-100'}`}
                                                        disabled={!isEditMode}
                                                    />
                                                </div>
                                            </div>
                                            {priority.items.map((item, itemIndex) => (
                                                <div className="w-full" key={itemIndex}>
                                                    <div className="px-4 py-2 w-full items-center flex">
                                                        <input
                                                            type="text"
                                                            className={`w-full h-10 bg-bgHome  ${isEditMode ? 'bg-home' : 'bg-cyan-100'}`}
                                                            value={item}
                                                            onChange={(e) => handlePriorityChange(priorityIndex, itemIndex, e.target.value)}
                                                            disabled={!isEditMode}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                            {isEditMode && (
                                                <div colSpan="2">
                                                    <button className="bg-buttonBlue rounded-full flex flex-col text-white w-12 h-12 text-4xl text-center m-auto items-center" onClick={() => addItem(priorityIndex)}>
                                                        +
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
