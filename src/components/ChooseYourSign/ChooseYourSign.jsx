import React from "react";
import './ChooseYourSign.css'

const ChooseYourSign = ({ setSign }) => {
    const signs = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"];
    const signsEmoji = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
    const signsName = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

    return (
        <div className="choose-sign">
            <div className="btn-group">
                {signs.map((sign, key) => (
                    <button onClick={() => setSign(sign)} className="btn btn-primary" key={sign}>
                        <p>{signsEmoji[key]}</p>
                        <p>{signsName[key]}</p>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ChooseYourSign;