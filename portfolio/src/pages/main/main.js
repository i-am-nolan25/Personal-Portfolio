import React from "react";  
import "./main.css"
// import icon_design from "../images/icon-design.svg"
// import icon_dev from "../images/icon-dev.svg"
// import icon_app from "../images/icon-app.svg"
// import icon_photo from "../images/icon-photo.svg"


function Main()   {
    return(
        <div className = "about">

            <div className = "header">
                
                <header>
                    
                    <h2 class = "h2 article-title">About me</h2>
                
                </header>
            </div>

            <div className = "about-text">
                
                <p>I am Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>

                <p>My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
            
            </div>

            <div className = "service">

                <div className = "header">
                    
                    <h3 class = "h3 service-title">What I am doing</h3>
                
                </div>

                <ul className = "service-list">

                    <li class="service-item">

                        <div class="service-icon-box">
                            
                            {/* <Image src={icon_design} alt="design icon" width="40"/> */}
                        
                        </div>

                        <div class="service-content-box">
                            <h4 class="h4 service-item-title">Web design</h4>

                            <p class="service-item-text">The most modern and high-quality design made at a professional level.</p>
                        
                        </div>

                    </li>

                    <li class="service-item">

                        <div class="service-icon-box">
                            
                            {/* <Image src={icon_dev} alt="Web development icon" width="40"/> */}
                        
                        </div>

                        <div class="service-content-box">
                            
                            <h4 class="h4 service-item-title">Web development</h4>

                            <p class="service-item-text">High-quality development of sites at the professional level.</p>
                        
                        </div>

                    </li>

                    <li class="service-item">

                        <div class="service-icon-box">
                            
                            {/* <Image src={icon_app} alt="mobile app icon" width="40"/> */}
                        
                        </div>

                        <div class="service-content-box">
                            
                            <h4 class="h4 service-item-title">Mobile apps</h4>

                            <p class="service-item-text">Professional development of applications for iOS and Android.</p>
                        
                        </div>

                    </li>

                    <li class="service-item">

                        <div class="service-icon-box">

                            {/* <Image src={icon_photo} alt="camera icon" width="40"/> */}
                        
                        </div>

                        <div class="service-content-box">

                            <h4 class="h4 service-item-title">Photography</h4>

                            <p class="service-item-text">I make high-quality photos of any category at a professional level.</p>
                        
                        </div>

                    </li>

                </ul>

            </div>

        </div>
    )
}

export default Main