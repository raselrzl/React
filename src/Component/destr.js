import React from 'react';

/* const Destr=({name, hName})=> */const Destr=props=>{
    const{name, hName}=props
    return (
        <div>
    <h1>Hello {name} known as {hName}</h1>
    
    </div>
 )
}
export default Destr;