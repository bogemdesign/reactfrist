import React from 'react'
import './Whycom.css'

export default function Whycom(props) {
    return (
        <div className="card-whycom">
            <div className="whycom-icon">
             <img src={props.data.img} alt="whyus" />
             </div>
            <div className="whycom-text">
              <h4>{props.data.judul}</h4>  
              <p>{props.data.des}</p>
            </div>
            
        </div>
    )
}
