
import React, { Component } from 'react';
import ForwardRef from './ForwardRef';

class ParentForwardRef extends Component {

    constructor(props) {
        super(props);
        this.inputRef=React.createRef();
    }
    
    clickHandler=()=>{
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                <ForwardRef ref={this.inputRef}/>  
                <button onClick={this.clickHandler}>focus</button>             
            </div>
        );
    }
}

export default ParentForwardRef;