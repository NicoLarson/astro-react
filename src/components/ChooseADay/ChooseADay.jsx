import React from "react";
import "./ChooseADay.css";

const ChooseADay = ({ setDay }) => {
    const day = ["yesterday", "today", "tomorrow"];
    const dayDisplay = ["Yesterday", "Today", "Tomorrow"];

    return (
        <div className="choose-a-day">
            <h2>Choose a day</h2>
            <div className="btn-group">
                {
                    day.map((day, key) => {
                        return (
                            <button type="button" class="btn btn-secondary" key={day} onClick={() => setDay(day)}>{dayDisplay[key]}</button>
                        )
                    }
                    )
                }
            </div>
        </div>
    );
}

export default ChooseADay;