import React from 'react'
import Headimg from '../../img/head.jpg'
import './Head.css'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export default function Head() {
    
    const text = () => {
        let url_wa = "https://web.whatsapp.com/send"
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          url_wa = "whatsapp://send"
        }
           let and= "&";

           let parameter =`${url_wa}?phone=6282118391206${and}text=*Admin*%0ASaya%20Mau%20Buat%20Landing%20Page`
           return window.open(parameter)
    }
    return (
        <div>
            <div className='head'>
                <img src={Headimg} alt="head" />
                <div className="head-text">
               <h2> Onlinekan Bisnis dan Dapatkan Calon Pelanggan Lebih Cepat </h2>
Ribuan orang sudah mengonlinekan bisnisnya dan merasakan manfaatnya. Onlinekan bisnis anda hari ini dan mulai dapatkan calon pelanggan potensial
                
                <br />
                <button onClick={text}> Get Start  <WhatsAppIcon style={{ fontSize: 20 }}/></button>
                </div>
            </div>
        </div>
    )
}
