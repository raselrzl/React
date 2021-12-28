import React, { Component} from "react";
class Welcome extends Component{
    
    render(){
        const {name, hName}=this.props
       /*  const {state1, state2}=this.state */
        /* return( {/* <h1>Welcome {this.props.name} also known as {this.props.hName}</h1> */
        return (
            <h1>
              Welcome {name} also known as {hName}
            </h1>
        )
        
    }
}

export default Welcome;