import React  from 'react';
import FinalHeader from './FinalHeader';
import Footer from './Footer';
import Introduction from './Introduction';

class Home extends React.Component {

    render(){
        return(
            <React.Fragment>
               <FinalHeader />
               <Introduction />
               <Footer />
            </React.Fragment>
        )
    }
}

export default Home;