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
                <p>Donec a massa vel enim ultricies bibendum. Vivamus ac semper ante, sit amet tincidunt nisi. Sed placerat sed magna diam, eu dignissim justo ornare ac sed dictum tristique pharetra aenean posuere hendrerit.</p>
                <div>
                    <input placeholder="Email address ...." />
                    <button>Get started</button>
                </div>
            </div>

            <div className="banner_img">
                <img className="banner_main_img" alt='' src={banner_img} />
                <img className="banner_icons" alt='' src={banner_icons_img} />
            </div>
        </div>
    )
}