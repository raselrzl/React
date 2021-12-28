import React from 'react';
const Hello=()=>{
    /* with jsx
     return(
        <div>
            <h1>Hello Rasel</h1>
        </div>
) */

    return React.createElement(
        'div',
         {id:'hello', className:'functionClass'}, 
         React.createElement('h1', null,'Hello Rasel')   
        
        )
}
export default Hello;