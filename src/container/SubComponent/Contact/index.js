import React from 'react';
import './assets/index.css';
import back from './assets/back.jpg';

class Contact  extends React.Component {

    render()
    {
        return(
            <div id="contact" className="contact_layout contact_padding">
                <div className="backImage" style={{backgroundImage:`url(${back})`}}></div>
                <div className="container">
                  <div className="row">
                   <div className="col-sm-6 same-height">
                      <div  className="contact-same-layout">
                         <p>We are currently taking on new projects.<br></br>
                             Would you like to discuss yours?
                          </p>
                          <ul>
                              <li>contact@yourwebsite.com</li>
                              <li>+91 8871636718</li>
                          </ul>
                          <footer>
                              <h5>Follow us on</h5>
                               <ul>
                                   <li>
                                       <a href="##">
                                         <i className="fa fa-facebook"></i>
                                       </a>
                                   </li>
                                   <li>
                                       <a href="##">
                                         <i className="fa fa-facebook"></i>
                                       </a>
                                   </li>
                                   <li>
                                       <a href="##">
                                         <i className="fa fa-facebook"></i>
                                       </a>
                                   </li>
                                   <li>
                                       <a href="##">
                                         <i className="fa fa-facebook"></i>
                                       </a>
                                   </li>
                                   <li>
                                       <a href="##">
                                         <i className="fa fa-facebook"></i>
                                       </a>
                                   </li>
                               </ul>
                          </footer>
                      </div>
                   </div>
                   <div className="col-sm-6 same-height">kumar</div>
                  </div>
                </div>
            </div>
        )
    }
}

export default Contact;