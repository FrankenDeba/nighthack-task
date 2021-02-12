import React from 'react'
import products from "../../assets/product.png"
import services from "../../assets/service.png"
import technology from "../../assets/technology.png"

import styles from "./ProductsAndServices.module.css"

function ProductsAndServices() {
    return (
        <div className = {styles.container}>
            <p className = {styles.heading}>Product and Services</p>
            <div className = {styles.mainHolder}>
                <div className = {styles.holder}>
                    <div className = {styles.imageHolder}><img src = {products} alt = "product"></img></div>
                    <span className = {styles.blueText}>Our Product</span>
                    <span className = {styles.para}>
                        Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.
                    </span>
                    <span><button className = {styles.button}>Read More</button></span>
                </div>

                <div className = {styles.holder}>
                    <div className = {styles.imageHolder}><img src = {services} alt = "product"></img></div>
                    <span className = {styles.blueText}>Our Service</span>
                    <span className = {styles.para}>
                        DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.
                    </span>
                    <span><button className = {styles.button}>Read More</button></span>
                </div>

                <div className = {styles.holder}>
                    <div className = {styles.imageHolder}><img src = {technology} alt = "product"></img></div>
                    <span className = {styles.blueText}>Our Technology</span>
                    <span className = {styles.para}>
                        First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.
                    </span>
                    <span><button className = {styles.button}>Read More</button></span>
                </div>
            </div>
            
        </div>
    )
}

export default ProductsAndServices
