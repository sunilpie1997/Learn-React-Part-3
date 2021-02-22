import React, { Component } from 'react';

class Input extends Component {

    constructor()
    {
        super();
        this.inputRef=React.createRef();
    }

    //this method will be called from parent component 'FocusInput.js'
    focusInput()
    {
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                <input ref={this.inputRef}></input>
                
            </div>
        );
    }
}

export default Input;