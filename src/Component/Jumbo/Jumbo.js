import React from 'react'
import Jumimg from '../../img/jumbo.png'
import './Jumbo.css'

export default function Jumbo() {
    return (
        <div className="container">
            <div className="jumbotron">
                <div className="jum-text">
                    <h2>Bingung Membuat Website </h2>
                    <div>Tak pelu cari cari kemana-mana lagi sekarang sudah ada tempatnya .
                        disini anda dapat membuat website sesuai dengan keinginan anda dengan basic marketing dengan harga yang murah </div>
                <button typeof="sumbit">GET START</button>
                </div>
                <div className="jum-img">
                    <img src={Jumimg} alt='jumbo' />
                </div>
            </div>
        </div>
    )
}
