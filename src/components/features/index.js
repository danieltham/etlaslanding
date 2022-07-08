import React from "react";
import './index.css'
import featureImg from '../../asset/featureImg.png'
import shieldImg from '../../asset/shield.png'
import truckImg from '../../asset/truck.png'
import tvImg from '../../asset/tv.png'
import puzzleImg from '../../asset/puzzle.png'
import flexiblityImg from '../../asset/flexiblity.png'


export default function Features(){
    return(
        <div id="etlas_features" className="features_section" >
            <h4>Etlas Features</h4>
            <div className="etlas_features">
                <div className="features_box">
                    <div className="feature">
                        <div><img alt='' src={shieldImg} /></div>
                        <h5>Unified Security Platform</h5>
                        <p>A single web-based portal to access all your security needs. View and configure access control, alarm systems, video recorders and more, all from a unified platform.</p>
                    </div>
            
                
                    <div className="feature">
                    <div><img alt='' src={truckImg} /></div>
                        <h5>Access from Anywhere </h5>
                        <p>Using modern browsers like Chrome, Edge and Mozilla, access Etlas from anywhere with almost any device. No client software required on local machines.</p>
                    </div>
                </div>
                <div className="feature_img">
                    <img alt='' src={featureImg}/>
                </div>

                <div className="features_box_row_2">
                    <div className="feature_row_2">
                    <div><img alt='' src={flexiblityImg} /></div>
                        <h5>Flexibility </h5>
                        <p>Use our control boards for access control, alarm  systems or general signaling to secondary systems. A single type of hardware to simplify your implementation while maintaining the ability for complex customisations.</p>
                    </div>
                
                
                    <div className="feature_row_2">
                    <div><img alt='' src={tvImg} /></div>
                        <h5>Modern. Intuitive. User-centric</h5>
                        <p>We strive to provide the most intuitive and modern user interface in the market. Get started with minimal onboarding and training.</p>
                    </div>
                
        
                    <div className="feature_row_2">
                    <div><img alt='' src={puzzleImg} /></div>
                        <h5>Modularity </h5>
                        <p>Select only the features you require with no complex licensing structures. Deploy on-premise or on our platform; the user experience will be completely the same.</p>
                    </div>
                </div>
                
        
            </div>
        </div>
    )
}