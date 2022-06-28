import React from "react";
import './index.css'
import logo from '../../asset/logoImg.png'
import fbIcon from '../../asset/fbIcon.png'
import pintrest from '../../asset/pinterest.png'
import instagram from '../../asset/instagram.png'
import titter from '../../asset/twitter.png'
import youtube from '../../asset/youtube.png'



export default function Footer(){
    return(
        <div className="footer_section" >
            <div className="footer">

                <div className="footer_first_part">
                    <div className="footer_logo" >
                    <img  alt='' src={logo} />
                    <p>Etlas</p>
                    </div>
                    <button>Get Started</button>
                    <div className="social_icons" >
                        <img alt='' src={fbIcon} />
                        <img alt='' src={instagram} />
                        <img alt='' src={pintrest} />
                        <img alt='' src={youtube} />
                        <img alt='' src={titter} />
                    </div>
                </div>

                <div className="footer_links">
                    <h6>Our Solution</h6>
                    <a href="#">Unified Security Platform</a>
                    <a href="#">Modern. Intuitive. User-centric</a>
                    <a href="#">Access from Anywhere</a>
                    <a href="#">Flexibility</a>
                    <a href="#">Modularity</a>
                    <a href="#">Our code. Our hardware. </a>
                </div>
                <div className="footer_links">
                    <h6>Company</h6>
                    <a href="#">How Etlas Works</a>
                    <a href="#">Get Quote</a>
                    <a href="#">Pricing</a>
                    <a href="#">Customers</a>
                    <a href="#">Secure by Design</a>
                    <a href="#">Access Control Guide</a>
                </div>
                <div className="footer_links">
                    <h6>Help</h6>
                    <a href="#">Support</a>
                    <a href="#">Contact</a>
                    <a href="#">Press</a>
                 
                </div>

            </div>

            <div className="footer_nav">
                <p>© 2022 Etlas. All Rights Reserved</p>

                <div>
                    <a href="#">Cookies</a>
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                </div>
            </div>
        </div>
    )
}