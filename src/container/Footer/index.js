import  React from 'react';
import logo from './assets/logo.png';
import './assets/index.css';

class Footer extends React.Component {

    render(){
        return(
            <div id="footer" className="footer-section" style={{backgroundImage:`url(${logo})`}}>
                <div className="container">
                    <div className="row">
                       <div className="col-lg-3">
                          <h2 className="first-title">Say hi!</h2>
                          <p>contact@yourwebsite.com</p>
                          <p>+533 4929 295</p>
                          <p>Copyright © 2017 Apolo. Designed by Ezwa Studio.</p>
                       </div>

                       <div className="col-lg-3">
                         <div className="move-right">
                         <h2 className="common-title">Navigation</h2>
                         <ul>
                             <li>Home</li>
                             <li>Page</li>
                             <li>Portfolio</li>
                             <li>Blog</li>
                             <li>Contact</li>
                         </ul>
                         </div>
                       </div>
                       <div className="col-lg-3">
                         <div className="move-right1">
                          <h2 className="common-title">Information</h2>
                          <ul>
                              <li>Privacy Policy</li>
                              <li>Terms of Use</li>
                              <li>Legal</li>
                              <li>Sitemap</li>
                          </ul>
                         </div>
                       </div>
                       <div className="col-lg-3"> 

                          <h2 className="common-title">Subscribe NewsLetter</h2>
                          <form>
                              <input type="email" name="email" placeholder="Email Address" />
                          </form>
                          <ul>
                              <li>Facebook</li>
                              <li>Twitter</li>
                              <li>Instagram</li>
                          </ul>
                       </div>
                       </div>
                </div>
            </div>
        )
    }
}


export default Footer;