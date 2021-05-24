import React from 'react'
import './Price.css'

export default function Price() {
    
    const text = () => {
        let url_wa = "https://web.whatsapp.com/send"
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          url_wa = "whatsapp://send"
        }
           let and= "&";

           let parameter =`${url_wa}?phone=6282118391206${and}text=*Order*%0APaket%20*Starter*%20Landing%20Page`
           return window.open(parameter)
    }

    const paketpaltinum = () => {
        let url_wa = "https://web.whatsapp.com/send"
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          url_wa = "whatsapp://send"
        }
           let and= "&";

           let parameter =`${url_wa}?phone=6282118391206${and}text=*Order*%0APaket%20*Platinum*%20Landing%20Page`
           return window.open(parameter)
    }
    return (
        <div className="con-price">
                <div className="price-judul">
                Berikut Harga Layanan Kami
                </div>
            <div className="price container">
             <div className="card-price">

                <div className="price-head">
                    Paket Starter
                </div>
                <div className="price-body">
                    <ul className="list">
                        <li> 1 landing page</li>
                        <li> domain com ( 1 tahun )</li>
                        <li> gratis hosting ( 1 tahun ) </li>
                        <li> Integrasi Chat WhatsApp</li>
                        <li> Integrasi Chat sosial media</li>
                        <li> Free Web Secure SSL</li>
                        <li> gratis update 3 bulan</li>
                    </ul>
                </div>
                <div className="price-footer">
                    <div className="harga">Rp 200.000</div>
                    <button onClick={text}> Chat Admin</button>
                    <p>Perpanjang Tahunan Hanya 100.000</p>
                </div>

             </div>

             <div className="card-price">

<div className="price-head">
    Paket Platinum
</div>
<div className="price-body">
    <ul className="list">
        <li> 3 landing page</li>
        <li> domain com ( 1 tahun )</li>
        <li> gratis hosting ( 1 tahun ) </li>
        <li> Integrasi Chat WhatsApp</li>
        <li> Integrasi Chat sosial media</li>
        <li> Free Web Secure SSL</li>
        <li> gratis update 3 bulan</li>
    </ul>
</div>
<div className="price-footer">
    <div className="harga">Rp 500.000</div>
    <button onClick={paketpaltinum}> Chat Admin</button>
    <p>Perpanjang Tahunan Hanya 200.000</p>
</div>

</div>
            </div>
            
        </div>
    )
}
