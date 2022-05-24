import React from "react";
import './DisplayYourChoice.css'

const DisplayYourChoice = ({ result,sign }) => {
    return (
        <div className="display-your-choice">
            <h2>🔮</h2>
            <table className="display-result table table-hover">
                <thead>
                    <tr>
                        <th scope="col">?Date</th>
                        <th scope="col">{sign}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr table-active>
                        <th scope="row">📅 Date</th>
                        <td>
                            {result.current_date}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">💗Compatibility</th>
                        <td>
                            {result.compatibility}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Lucky Number</th>
                        <td>
                            {result.lucky_number}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Lucky Color</th>
                        <td>
                            {result.color}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Lucky Time</th>
                        <td>
                            {result.lucky_time}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Mood</th>
                        <td>
                            {result.mood}
                        </td>
                    </tr>
                </tbody>
            </table>
            <p>{result.description}</p>
        </div >
    )
}

export default DisplayYourChoice;