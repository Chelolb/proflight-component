import React, { useState } from "react";
import logo from '../../images/logoproflight.png';
import left from '../../images/left-arrow.png';
import right from '../../images/right-arrow.png'
import './ProFlight.css'



export default function ProFlight() {

    const [index, setIndex] = useState(3)

    function goPrev(e){
        if (index === 0) {
            return setIndex(3);
        }
        return setIndex(index - 1);
    }
    
    function goNext(e){
        if (index === 3) {
            return setIndex(0);
        }
        return setIndex(index + 1);
    }

    return (
        <div className="logoList">

            <div className="containerPrimary">   
                <div className="buttonLeft">
                    <img className="imgButton" src={left} alt="go to left"/>
                    <button className = 'prevButton'
                        onClick={(e) => goPrev(e)}>
                    </button>
                </div>
                <div className={index === 0 ? "containerImg" : "containerImgLight"}>
                    <img className="logoImg" src={logo} alt="logo 1"/>
                </div>
                <div className={index === 1 ? "containerImg" : "containerImgLight"}>
                    <img className="logoImg" src={logo} alt="logo 2"/>
                </div>
                <div className={index === 2 ? "containerImg" : "containerImgLight"}>
                    <img className="logoImg" src={logo} alt="logo 3"/>
                </div>
                <div className={index === 3 ? "containerImg" : "containerImgLight"}>            
                    <img className="logoImg" src={logo} alt="logo 4"/>
                </div>
                <div className="buttonRight">
                    <img className="imgButton" src={right} alt="go to right"/>
                    <button className = 'nextButton'
                        onClick={(e) => goNext(e)}>
                    </button>
                </div>
            </div> 
        </div>
    )
};