import React from 'react'
import Footer from '../Component/Footer/Footer'
import Futures from '../Component/Futures/Futures'
import Head from '../Component/Head/Head'
import Navbar from '../Component/Navbar/Navbar'
import Portfolio from '../Component/Portfolio/Portfolio'
import Price from '../Component/Price/Price'
// import Jumbo from '../Component/Jumbo/Jumbo'
import Whyus from '../Component/Whyus/Whyus'
export default function Home() {
    return (
        <div>
            <Navbar />
            <Head />   
            <Futures />    
            <Portfolio />   
            <Whyus />
            <Price />
            <Footer />
            
        </div>
    )
}

