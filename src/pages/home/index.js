import React from "react";
import Banner from "../../components/banner";
import Features from "../../components/features";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import './index.css'
import ourCodeImg  from  '../../asset/codeImg.png'
import MessageForm from "../../components/messageForm";
import AboutSection from "../../components/about";

export default function Home (){
    return(
        <div>
            <Navbar/>

            <div className="home_page">
                <Banner/>
                <Features/>

                <div id='solution' className="our_code ">
                    <div className="our_code_img">
                        <img alt='' src={ourCodeImg} />
                    </div>

                    <div className="ourCode_txt">
                        <h4>Our Code, Our Hardware</h4>
                        <p>Our control boards are designed and developed in-house by Etlas engineers – we own our source code and hardware. This provides you with the customizability which off-the-shelve   software don’t. We understand that you may have specific         security needs which are important to you, and we are here   for you.</p>
                    </div>
                </div>
              
                <AboutSection/>
                <MessageForm/>
            </div>

            <Footer/>
        </div>
    )
}
