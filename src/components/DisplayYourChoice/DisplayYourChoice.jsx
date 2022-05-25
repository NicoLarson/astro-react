import React from "react";
import './DisplayYourChoice.css'

const DisplayYourChoice = ({ result, sign }) => {
    const signs = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagitarius", "capricorn", "aquarius", "pisces"];
    const signsImagesLink = ["https://img.icons8.com/external-others-maxicons/62/000000/external-aries-celestial-and-witchcraft-others-maxicons.png",
        "https://img.icons8.com/external-others-maxicons/62/000000/external-taurus-celestial-and-witchcraft-others-maxicons.png",
        "https://img.icons8.com/external-others-maxicons/62/000000/external-gemini-celestial-and-witchcraft-others-maxicons.png",
        "https://img.icons8.com/external-others-maxicons/62/000000/external-cancer-celestial-and-witchcraft-others-maxicons.png",
        "https://img.icons8.com/external-others-maxicons/62/000000/external-leo-celestial-and-witchcraft-others-maxicons.png",
        "https://img.icons8.com/external-others-maxicons/62/000000/external-virgo-celestial-and-witchcraft-others-maxicons.png",
        "https://img.icons8.com/external-others-maxicons/62/000000/external-libra-celestial-and-witchcraft-others-maxicons.png",
        "https://img.icons8.com/external-others-maxicons/62/000000/external-scorpio-celestial-and-witchcraft-others-maxicons.png",
        "https://img.icons8.com/external-others-maxicons/62/000000/external-sagitarius-celestial-and-witchcraft-others-maxicons.png",
        "https://img.icons8.com/external-others-maxicons/62/000000/external-capricorn-celestial-and-witchcraft-others-maxicons.png",
        "https://img.icons8.com/external-others-maxicons/62/000000/external-aquarius-celestial-and-witchcraft-others-maxicons.png",
        "https://img.icons8.com/external-others-maxicons/62/000000/external-pisces-celestial-and-witchcraft-others-maxicons.png"];

    return (
        <div className="display-your-choice">
            <table className="display-result table table-hover">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th className="sign-name" scope="col">
                            <h2>{sign}</h2>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr table-active className="table-primary">
                        <th scope="row"><img src="https://img.icons8.com/external-filled-outline-berkahicon/64/000000/external-date-survey-filled-outline-berkahicon.png" />Date</th>
                        <td>
                            {result.current_date}
                        </td>
                    </tr>
                    <tr className="table-secondary">
                        <th scope="row"><img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-compatibility-relationship-flaticons-lineal-color-flat-icons.png" />Compatibility</th>
                        <td>
                            {result.compatibility}
                        </td>
                    </tr>
                    <tr className="table-primary">
                        <th scope="row"><img src="https://img.icons8.com/external-others-anggara-putra/64/000000/external-gambling-casino-others-anggara-putra-100.png" />Lucky Number</th>
                        <td>
                            {result.lucky_number}
                        </td>
                    </tr>
                    <tr className="table-secondary">
                        <th scope="row"><img src="https://img.icons8.com/external-flat-kendis-lasman/64/000000/external-color-graphic-design-flat-flat-kendis-lasman.png" />Lucky Color</th>
                        <td>
                            {result.color}
                        </td>
                    </tr>
                    <tr className="table-primary">
                        <th scope="row"><img src="https://img.icons8.com/cotton/64/000000/love-time.png" />Lucky Time</th>
                        <td>
                            {result.lucky_time}
                        </td>
                    </tr>
                    <tr className="table-secondary">
                        <th scope="row"><img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-mood-swings-emotions-and-emotional-intelligence-flaticons-flat-flat-icons.png" />Mood</th>
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