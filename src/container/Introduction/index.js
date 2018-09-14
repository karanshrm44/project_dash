import React from 'react';
import Logo from './assets/main.png';
import './assets/index.css';
import backgrounds from './assets/background.png';

class Introduction extends React.Component {

    render(){
        return(
            <div className="display introduction" style={{background:`url(${backgrounds})`}}>
                  <div className="container">
                      <img style={{marginBottom:'95px'}} src={Logo} alt="logo" />
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