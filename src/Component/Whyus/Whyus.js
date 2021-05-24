import React from 'react'
import Whycom from '../Whycom/Whycom'
import './Whyus.css'
import seo from '../../img/seo.png'
import ads from '../../img/ads.png'
import jasa from '../../img/jasa-website.png'



export default function Whyus() {
    return (
        <div className="con-whyus"> 
        <h3> Penawaran Layanan Kami</h3>
            <div className="whyus container">
              <Whycom data={{
                  img: jasa,
                  judul : "Jasa Desain Web ",
                  des : "Desain untuk segala kebutuhan web seperti , Landing page Produk atau Jasa , Web Penggalangan Dana , Web Sekolah dan lainnya "
              }} />
              <Whycom data={{
                  img: seo,
                  judul : "Jasa SEO Web",
                  des : "Tim kami siap membawa landing page Anda bersaing di halaman depan mesin pencarian google dengan teknik SEO terbaik guna memastikan hasil jangka panjang"
              }} />
              <Whycom data={{
                  img: ads,
                  judul : "Iklan Multi Flatform",
                  des : "Kami menawarkan jasa periklanan di facebook, instagram, youtube, dan google untuk bersaing di halaman satu dengan cepat tanpa harus optimasi SEO pada Landing Page Anda"
              }} />
             
            
            </div>
        </div>
    )
}
