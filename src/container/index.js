import React  from 'react';
import FinalHeader from './FinalHeader';
import Footer from './Footer';
import Introduction from './Introduction';
import Animations from './Animation';

class Home extends React.Component {

    constructor(){
        super();
    this.state={
        show:true
    }
}

    componentDidMount(){
        setTimeout(() => {
            this.setState({show:false})
        }, 2000);

    }

    

    render(){
    
        return(
            <div>
           {
         this.state.show ? <Animations /> :
            <React.Fragment>
               <FinalHeader />
               <Introduction />
               <Footer />
            </React.Fragment>

           }
           </div>
        )
    }
}

export default Home;