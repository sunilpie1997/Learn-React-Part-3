import { render } from '@testing-library/react';
import React from 'react';
import './myStyles.css';

const StyleSheets=(props)=>{

    let className=props.primary? 'primary':'';

    return(
        <div>
            <h1 className="primary">StyleSheets</h1>
            <h2 className={className}>className property is set dynamically</h2>
            <h3 className={`${className} font-xl`}>set multiple classes using template literals</h3>
        </div>
    );
}

export default StyleSheets;