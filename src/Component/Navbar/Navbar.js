import React, { useState } from 'react'
import "./Navbar.css"

export default function Navbar() {
  const [Aktif, setAktif] = useState(false)

  const handleToggle = () => {
    setAktif(!Aktif);
  };

    return (
        <div>
            <div className="navbar">
                <h1>Bogem design </h1>
                <ul className= {Aktif ? "nav slide": "nav" } >
                    <li>Home</li>
                    <li>About</li>
                    <li>Contac Us</li>
                    <li>Login</li>
                    

                </ul>
                <div className="menu-toggle" onClick={handleToggle} >
        <div className="bintik">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
     </div>
            </div>
        </div>
    )
}
