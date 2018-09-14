import React from 'react';
import './assets/index.css';
import main from './assets/main.png';


class Animations extends  React.Component {


    render(){
        return(
     <div className="app-preloader">
        <div className="app-preloader-outer">
          <div className="app-loader">
            <img src={main} alt="mainImage" />
          </div>
        </div>
      </div>
        )
    }
}

export default Animations;