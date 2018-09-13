import React from 'react';
import logo from './assets/main.png';
import './assets/index.css';

class HiddenHeader extends React.Component {

    render()
    {
        return(
            <div className="hidden-header">
               <div className="hidden-header-container">
                  <div className="hidden-header-head">
                       <div className="hidden-header-col">
                          <div>
                              <img src={logo} alt="logo" />
                          </div>
                          <div>
                        <ul className="c-display-row">
                         <li>
                             <a href="##">
                               <i className="fa fa-facebook">
                               </i>
                             </a>
                         </li>
                         <li>
                             <a href="##" >
                               <i className="fa fa-twitter"></i>
                             </a>
                        </li>
                        <li>
                            <a href="##" >
                               <i className="fa fa-instagram"></i>
                            </a>
                        </li>
                       </ul>
                          </div>
                       </div>
                  </div>
                  <div className="hidden-header-content">
                    <div className="hidden-header-col">
                        <nav className="navigation-container">               {/*Navigation Start */}
                            <div className="navigation-container-content">
                               <ul className="navigation-style">
                                   <li>
                                       <a className="activeColor" href="###">Home</a>
                                   </li>
                                   <li>
                                       <a href="###">Pages</a>
                                   </li>
                                   <li>
                                       <a href="###">Portfolio</a>
                                   </li>
                                   <li>
                                       <a href="###">Blog</a>
                                   </li>
                                   <li>
                                       <a href="###">Contact</a>
                                   </li>
                               </ul>
                            </div>
                        </nav>                                                  {/* Navigation end */}
                       
                    </div>
                  </div>
                  <div className="hidden-header-footer">
                    <div className="hidden-header-col">
                          <p onClick={this.props.click}>  
                              <a href="##">
                               <span className="lnr lnr-cross"></span>
                                  CLOSE
                             </a>
                          </p>
                    </div>
                  </div>
               </div>
            </div>
        )
    }
}

export default HiddenHeader;