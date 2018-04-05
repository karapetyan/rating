import React from 'react';

const Star = ({ selected=false, hover=f=>f, out=f=>f, onClick=f=>f }) =>
    <div className={(selected) ? "star selected" : "star"} onMouseOver={hover} onMouseOut={out} onClick={onClick}></div>

export default Star;