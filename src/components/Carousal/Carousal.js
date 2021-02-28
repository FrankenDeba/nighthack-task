import React from 'react'
import {useState, useEffect} from "react"
import TopSection from "../TopSection/TopSection"
import MiddleSection from '../MiddleSection/MiddleSection'
import "./Carousal.css"
function Carousal() {
    const [ind, setInd] = useState(false)
    const changeImage = (i) => {
            setInd(prevState => !prevState)
    }
    return (
        <div>
            {ind ?
             <span className = "carousal_holder"><span className = "arrow" onClick = {changeImage}>{"<"}</span><TopSection/><span className = "arrow" onClick = {changeImage}>{">"}</span></span> 
            : <span className = "carousal_holder"><span className = "arrow" onClick = {changeImage}>{"<"}</span><MiddleSection/><span className = "arrow" onClick = {changeImage}>{">"}</span></span>}
    
    
        </div>
    )
}

export default Carousal
