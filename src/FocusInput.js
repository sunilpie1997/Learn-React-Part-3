import React, { Component } from 'react';
import Input from './components/Input';

class FocusInput extends Component {

    constructor()
    {
        super();
        this.inputRef=React.createRef();
    }

    clickHandler=()=>{

        this.inputRef.current.focusInput();
    }
    render() {
        return (
            <div>
                <Input ref={this.inputRef}/> 
                <button onClick={this.clickHandler}>Ref with class component</button>           
            </div>
        );
    }
}

export default FocusInput;