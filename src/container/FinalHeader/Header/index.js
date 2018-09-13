import React from 'react';
import './assets/index.css';
import logo from './assets/main.png';

class Header extends React.Component {
    render(){
        return(
            <div id="header" className="header-position header-light header-vertical">
               <div className="header-section">
                  <div className=" header-items header-first-component c-display-row">
                     <div className="header-item">
                         <img src={logo} alt="logo" />
                     </div>
                     <div className=" header-item">
                       <ul className="c-display-column c-display-row">
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
                  <div className="header-item header-middle-component">
                    <h1 className="page-title">Apolo Photography</h1>
                  </div>
                  <div className="header-last-component">
                    
                    <div onClick={this.props.click} className="header-item">
                         <div className="click">
                            <hr className="one"></hr>
                            <hr className="two"></hr>
                            <hr className="one"></hr>
                         </div>
                    </div>
                  </div>
               </div>
            </div>
        )
    }
}

export default Header;