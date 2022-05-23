import React from "react";
import './DisplayYourChoice.css'

const DisplayYourChoice = ({ result }) => {
    return (
        <div className="display-your-choice">
            <h2>Your sign is:</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Your sign</th>
                        <th>Compatibility</th>
                        <th>Lucky Number</th>
                        <th>Lucky Color</th>
                        <th>Lucky Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {result.current_date}
                        </td>
                        <td>
                            {result.get_name}
                        </td>
                        <td>
                            {result.compatibility}
                        </td>
                        <td>
                            {result.lucky_number}
                        </td>
                        <td>
                            {result.color}
                        </td>
                        <td>
                            {result.lucky_time}
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default DisplayYourChoice;