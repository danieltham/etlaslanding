import React from "react"
import './index.css'
import banner_img from '../../asset/bannerImg.png'
import banner_icons_img from '../../asset/bannerIcons.png'
import bannerMobIcons from '../../asset/mobIcons.png'

export default function Banner(){
    return(
        <div id='home' className="banner_section" >
            <img className="banner_mob_icons" alt='' src={bannerMobIcons} />
            <div className="banner_txt">
                <h3>Unifying Your Security</h3>
                <p>Etlas provides a single web-based platform for all your security management needs. Powered by a modern micro-computer, Etlas integrates access control, video surveillance, alarm systems, and all other third party systems on a single platform.  </p>
                <div>
                    <input placeholder="Email address ...." />
                    <button>Get in touch</button>
                </div>
            </div>

            <div className="banner_img">
                <img className="banner_main_img" alt='' src={banner_img} />
                <img className="banner_icons" alt='' src={banner_icons_img} />
            </div>
        </div>
    )
}