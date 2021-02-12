import React from 'react'
import Header from "../Header/Header"
import TopSection from "../TopSection/TopSection"
import MiddleSection from '../MiddleSection/MiddleSection';
import ProductsAndServices from '../ProductsAndServices/ProductsAndServices';
import Footer from '../Footer/Footer';
import Copyright from '../Copyright/Copyright';

function Home() {
    return (
        <div>
            <Header/>
            <TopSection/>
            <MiddleSection/>
            <ProductsAndServices/>
            <Footer/>
            <Copyright/>
        </div>
    )
}

export default Home
