import React from 'react';
import back from './assets/back.png';
import sign from './assets/sign.png';
import './assets/index.css';

class Me extends React.Component {

    render()
    {
        return(
            <div id="me" className="about-me parallax" style={{backgroundImage:`url(${back})`}}>
              <div className="container">
                 <blockquote>
                    <p>
                     I am a highly organised and motivated professional<br></br> photographer
                       with a wealth of experience in a range of 
                       photographic styles and services.
                    </p>
                    <footer>
                        <img src={sign} alt="Signature" />
                    </footer>
                 </blockquote>
                 <a href="">Learn More about Me
                  <span className="lnr lnr-arrow-right"></span>
                 </a>
                 
               </div>
            </div>
        )
    }
}

export default Me;