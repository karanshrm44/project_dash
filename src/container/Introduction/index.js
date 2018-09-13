import React from 'react';
import Logo from './assets/main.png';
import './assets/index.css';

class Introduction extends React.Component {

    render(){
        return(
            <div className="introduction">
                  <div className="container display">
                      <img style={{marginBottom:'95px'}} src={Logo} alt="logo" width="100px" height="52px" />
                      <h6>I have a simple mission</h6>
                      <blockquote>
                          <p>
                             " To produce the highest quality work for every<br></br>
                              client, on every project "

                          </p>
                      </blockquote>
                  </div>
            </div>
        )
    }
}

export default Introduction;