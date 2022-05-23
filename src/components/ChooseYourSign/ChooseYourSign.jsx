import React from "react";
import './ChooseYourSign.css'

const ChooseYourSign = ({setSign}) => {
    const signs = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"];
    return (
        <div className="choose-sign">
            <h2>Choose your sign</h2>
            <ul className="sign-list">
                {signs.map(sign => (
                    <li onClick={()=>setSign(sign)} className="sign-container" key={sign}>
                        <img src={`/images/${sign}.png`} alt={sign} />
                        <p>{sign}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ChooseYourSign;