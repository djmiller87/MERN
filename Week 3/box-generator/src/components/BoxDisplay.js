import React, { useState } from 'react';
    
const BoxDisplay = (props) => {
    const {boxColor} = props;
    return (
            <div className='h-200 d-inline-block w-200 p-3 m-1' style={{backgroundColor:boxColor}}>
                <h1 >Box</h1>
            </div>

    );
};
    
export default BoxDisplay;

