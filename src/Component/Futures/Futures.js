import React from 'react'
import './Futures.css'
import futuimg from '../../img/futures.png'


export default function Futures() {
    return (
        <div className="con-futures">
            <div className="futures container">
                <div className="futures-img">
                        <img src={futuimg} alt="futures" />
                </div>
                <div className="futures-text"> 
              <h3>Butuh Landing Page Professional Terima Beres dengan Harga Terjangkau? </h3>
                    Tidak perlu pusing membayangkan tampilan website yang cocok untuk usaha anda. 
                    Cukup informasikan kepada kami bisnis dan kebutuhan anda dan kami buatkan website dengan tampilan terbaik untuk website anda.
                </div>
            </div>
        </div>
    )
}
