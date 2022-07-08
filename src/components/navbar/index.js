import React, {useState} from "react";
import './index.css'
import logo from '../../asset/logoImg.png'
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";


export default function Navbar() {

    const [navState , setNavState]= useState(false)
    return (
<OutsideClickHandler onOutsideClick={()=>setNavState(false)} >
        <div class="nav">
            <input type="checkbox" checked={navState} id="nav-check" />
            <div class="nav-header">
                <div class="nav-title">
                    <img alt='' src={logo} />
                    Etlas
                </div>
            </div>
            <div class="nav-btn">
                <label onClick={()=>{!navState?setNavState(true):setNavState(false)}} for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div class="nav-links">
                <a onClick={()=>setNavState(false)} href="#home">Home</a>
                <a onClick={()=>setNavState(false)} href="#etlas_features"> Our Solution </a>
                <a onClick={()=>setNavState(false)} href="#about">About Us</a>
               <button onClick={()=>setNavState(false)}><a href="#message_form_section">Enquiry</a></button>
            </div>
        </div>
          </OutsideClickHandler>
    )
}