import React from 'react';
import Header from './Header';
import HiddenHeader from './HiddenHeader';

class FinalHeader extends React.Component {

    state={
        value:true
    }

    handleClick=()=>{
        this.setState({
            value:!this.state.value
        })
    }

    render() {

        return(
            <React.Fragment>
               {
                   this.state.value ? <Header click={this.handleClick}/> : <HiddenHeader click={this.handleClick}/>
               }
            </React.Fragment>
        )
    }
}

export default FinalHeader;