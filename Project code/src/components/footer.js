import React from 'react';
import './footer.css';
import fb from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/Linkdin.png';
import insta from '../assets/instagram.jpg';
const Footer=()=>{

    return(
<div className="footermain">
    <div className="footermain-1">
        <div className="footer1">
            <div className="footercontent">
                <h4>Contact US</h4>
                <a href="/mobile">
                    <p>Whatsapp</p>
                </a>
                <a href="/e-mail">
                    <p>E-mai address</p>
                </a>
                <a href="/Headoffice">
                    <p>HeadOffice address</p>
                </a>
            </div>

            <div className="footercontent">
                <h4>Resources</h4>
                <a href="/resource">
                    <p>FAQ</p>
                </a>
                <a href="/healthplan">
                    <p>Legal Information</p>
                </a>
                <a href="/individual">
                    <p>Feedback</p>
                    </a>
            </div>

            <div className="footercontent">
                <h4>Official Partners</h4>
                <a href="/hypermarket">
                    <p>HyperMarket</p>
                </a>
                <a href="/dmart">
                    <p>Dmart</p>
                </a>
            </div>

            <div className="footercontent">
                <h4>Company</h4>
                <a href="/about">
                    <p>About Us</p>
                </a>
                <a href="/press">
                    <p>Press</p>
                </a>
                <a href="/career">
                    <p>Career</p>
                    </a>
            </div>

            <div className="footercontent">
                <h4>follow us on</h4>
                <div className="socialmedia">
                    <p><img src={fb} alt=""/></p>
                    <p><img src={twitter} alt=""/></p>
                    <p><img src={linkedin} alt=""/></p>
                    <p><img src={insta} alt=""/></p>
                </div>
            </div>
        </div>
        <hr></hr>

        <div className="footer2">
            <div className="copyright">
                <p>@{new Date().getFullYear()} EpicMarket. All right reserved.</p>
            </div>

            <div className="footer2-content">
                <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                <a href="/privacy"><div><p>Privacy</p></div></a>
                <a href="/security"><div><p>Security</p></div></a>
                <a href="/return"><div><p>Return and Refund policy</p></div></a>
            </div>

        </div>
    </div>
</div>
    )
}
export default Footer;