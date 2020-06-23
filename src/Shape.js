import React from 'react';

const Shape = (props) =>{
    const {shape} =props; 
    return <div className={shape}></div>
};

export default Shape;