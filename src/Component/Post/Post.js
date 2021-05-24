import React from 'react'
import './Post.css'


export default function Post(props) {
    return (
        <div>
            <div className="card-post" key={props.data.id}>
                <div className="post-img">
                  <img src={props.data.img} alt={props.data.judul}/>
                </div>
                <div className="post-text">
                    <h2>{props.data.judul}</h2>
                </div>
               <a href={props.data.link}  ><button>View  </button> </a>
            </div>
            
        </div>
    )
}
