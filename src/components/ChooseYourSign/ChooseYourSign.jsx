import React from "react";
import './ChooseYourSign.css'

const ChooseYourSign = ({ setSign }) => {
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
        <div className="choose-sign">
            <div className="btn-group">
                {signs.map((sign, key) => (
                    <button onClick={() => setSign(sign)} className="btn btn-primary" key={sign}>
                        <img src={signsImagesLink[key]} alt="" />
                        <p className="sign-name">{sign}</p>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ChooseYourSign;