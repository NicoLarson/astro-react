import React from "react";
import "./ChooseADay.css";

const ChooseADay = ({ setDay }) => {
    const day = ["yesterday", "today", "tomorrow"];

    return (
        <div className="choose-a-day">
            <h2>Choose a day</h2>
            {
                day.map(day => {
                    return (
                        <button key={day} onClick={() => setDay(day)}>{day}</button>
                    )
                }
                )
            }
        </div>
    );
}

export default ChooseADay;