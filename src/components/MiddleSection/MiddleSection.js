import React from 'react'
import pana2 from "../../assets/pana2.png"
import styles from "./MiddleSection.module.css"
function MiddleSection() {
    return (
        <div className = {styles.container}>
           <div className = {styles.right}>
                <div className = {styles.paraHolder}>
                    <div className = {styles.welcome}>
                        <span className = {styles.text}>Welcome to <span className = {styles.blueText}>Orizon </span></span>
                        <span className = {`${styles.text} ${styles.blueText}`}>Technologies</span>
                    </div>
                    <span className = {`${styles.topPara} ${styles.text}`}>
                        <div className = {styles.para1}>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span className = {styles.blueText}>DSI</span>’s distinct front-end based application concept.</div>
                        <div className = {styles.para2}>Managed by a team of professional experts with extensive experience and impressive track records, <span className = {styles.blueText}>DSI</span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.</div>
                    </span>
                </div> 
            </div>
        
            <div className = {styles.pana2}>
                <img src = {pana2} alt = "pana2">

                </img>
            </div>
        </div>
    )
}

export default MiddleSection
