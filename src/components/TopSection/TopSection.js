import React from 'react'
import pana from "../../assets/pana.png"
import styles from "./TopSection.module.css"
function TopSection() {
    return (
        <div className = {styles.container}>
           <div className = {styles.left}>
               <span className = {styles.text}>Making the most of the</span>
               <span className = {styles.text}>ever-growing</span>
               <span className = {`${styles.blueText} ${styles.text}`}>Information Technology</span>
               <span className = {`${styles.topPara} ${styles.text}`}>Managed by a team of professional experts with extensive exerience and impressive track record</span>
               <button className = {styles.button}>Read More</button>
            </div> 
            <div className = {styles.pana}>
                <img src = {pana} alt = "pana">

                </img>
            </div>
        </div>
    )
}

export default TopSection
