import React from 'react'
import logo from "../../assets/logo.png"
import technologies from "../../assets/technologies.png"
import styles from "./Footer.module.css"

function Footer() {
    return (
        <div className = {styles.container}>
            <div className = {styles.addressDetails}>
                <div className = {styles.logoHolder}>
                    <span className = {styles.logoImage}><img src = {logo} alt = "logo"></img></span>
                    <span className = {styles.brandName}>ORIZON</span>
                </div>
                <span className = {styles.brandFullName}>Orizon Technologies Ltd</span>
                <span className = {styles.address}>Ruko Jalur Sutera 29A No. 53<br/>
                    Alam Sutera Serpong, Tangerang 15323
                </span>
            </div>
            
            <div className = {styles.addressDetails}>
                <span className = {styles.contact}>Contact</span>
                <span className = {styles.text}>Phone : +62.21.5314.1135</span>
                <span className = {styles.text}>Fax : +62.21.5314.1135</span>
                <span className = {styles.text}>Email : community@orizon.com</span>
            </div>
            <div className = {styles.technologies}>
                <img src = {technologies} alt = "t">

                </img>
            </div>
        </div>
    )
}

export default Footer
