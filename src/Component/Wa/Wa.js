import React from 'react'
import './Wa.css'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export default function Wa() {

    const text = () => {
        let url_wa = "https://web.whatsapp.com/send"
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          url_wa = "whatsapp://send"
        }
           let and= "&";

           let parameter =`${url_wa}?phone=6282118391206${and}text=*Konsultasi*%0ATentang%20Pembuatan%20Landing%20Page`
           return window.open(parameter)
    }
    return (
        <div className="wa" onClick={text}>
        <WhatsAppIcon />

        </div>
    )
}
