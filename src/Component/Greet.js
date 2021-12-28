import React from 'react';

const Greet=(props)=>{
    console.log(props)
    return (
        <div>
    <h1>Hello {props.name} known as {props.hName}</h1>
    {props.children}
    </div>
 )
}
export default Greet;