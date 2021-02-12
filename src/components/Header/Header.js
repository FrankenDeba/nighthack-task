import React from 'react'
import styles from "./Header.module.css"
import NavBar from '../NavBar/NavBar'
import logo from "../../assets/logo.png"
import union from "../../assets/Union.png"
import shuffle from "../../assets/shuffle.png"
import mail from "../../assets/mail.png"
function Header() {
    return (
        <div className = {styles.container}>
            <div className = {styles.logoHolder}>
                <span className = {styles.logoImage}><img src = {logo} alt = "logo"></img></span>
                <span className = {styles.brandName}>ORIZON</span>
            </div>
            <div className = {styles.navbar}><NavBar/></div>
            <div className = {styles.extraLogos}>
                <span className = {styles.extraLogo}><img className = {styles.union} src = {union} alt = "union"></img></span>
                <span className = {styles.extraLogo}><img className = {styles.mail} src = {mail} alt = "mail"></img></span>
                <span className = {styles.extraLogo}><img className = {styles.shuffle} src = {shuffle} alt = "shuffle"></img></span>
            </div>
        </div>
    )
}

export default Header
