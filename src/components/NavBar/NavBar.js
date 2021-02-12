import React, { useState } from 'react'
import navbarLogo from "../../assets/navbar-logo.png"
import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"

function NavBar() {
    const [ isOpen, setISOpen ] = useState(false)
    return (
        <div className = {styles.hidden}>
            <div className = {styles.mobile}>   
                {isOpen?
                    <div className={styles.nav}>
                        <div className = {styles.menu} onClick = {()=>setISOpen(false)}>X</div>
                            <div className = {styles.menuLinkHolder}>
                                <li className={styles.link}>Services</li>
                                <li className={styles.link}>Product</li>
                                <li className={styles.link}>Technology</li>
                                <li className={styles.link}>About</li>
                                <li className={styles.link}>Client</li>
                                <Link to = "/login" className = {styles.link}>Log In</Link>
                            </div>
                        </div>
                    :
                    <div className = {styles.menu} onClick = {()=>setISOpen(true)}>
                        <img src = {navbarLogo} alt = "O"></img>
                    </div>
        }

        </div>
        <div className = {styles.desktop}>
            <li className={styles.link}>Services</li>
            <li className={styles.link}>Product</li>
            <li className={styles.link}>Technology</li>
            <li className={styles.link}>About</li>
            <li className={styles.link}>Client</li>
            <Link to = "/login" className = {styles.link}>Log In</Link>
        </div>
        
    </div>
    )
}

export default NavBar
