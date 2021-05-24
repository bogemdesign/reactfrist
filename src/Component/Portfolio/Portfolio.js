import React, { useEffect, useState } from 'react'
import Post from '../Post/Post'
import './Portfolio.css'
// import jumbo from '../../img/jumbo.png'
// import Postdata from '../../Config/Post.js'

export default function Portfolio() {
const [Put,setPut] = useState([])
const [Loading, setLoading] = useState(false)
    

useEffect ( ()=>{ 
 setLoading(true)
try {
    
    fetch('https://bogemdesign.github.io/Data/Post.json')
     .then(response =>  response.json())
     .then(datas =>  setPut(datas.post));
     setLoading(false)
} catch (error) {
    setLoading(true)
    console.log(error.message)
}
    
},[])

//  console.log(Put)
    return (
        <div className="con-portfolio">
            <div className="container">
               <h3>Portofolio</h3>
               <div className="portfolio">
                  
                    { 
                    
                    Loading ?<div>Memuat Data... </div>:Put.map((datapost)=>{
                        
                        return <Post 
                        data={{
                            img : datapost.img,
                            judul : datapost.judul,
                            link : datapost.link,
                            id : datapost.id
                        }}
                        
                        
                       key={datapost.id} />

                    })


                    }

               </div>

            </div>
            
        </div>
    )
}
