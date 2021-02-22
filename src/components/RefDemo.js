import React from 'react';

class RefDemo extends React.Component{

    constructor(props)
    {
        super(props);
        //first approach
        this.inputRef=React.createRef();
        //second approach using callback ref
        this.cbRef=null;
        this.setCbRef=element=>{
            this.cbRef=element
        }
    }

    componentDidMount(){
        /* first approach
        this.inputRef.current.focus();
        console.log(this.inputRef);
        */

        //second approach
        if(this.cbRef)
        {
            this.cbRef.focus();
            
        }
    }

    clickHandler=()=>{
        alert(this.inputRef.current.value);
    }

    render=()=>{

        return(
            /* first approach 
            <div>
                <h2>Ref Component</h2>
                <input type="text" name="input" ref={this.inputRef}></input>
                <button onClick={this.clickHandler}>click me</button>

                <input type="text" name="input2" ref={this.setCbRef}></input>
            </div>
            */
           //second approach
            <div>
                <h2>Ref Component</h2>
                <input type="text" name="input2" ref={this.setCbRef}></input>
            </div>
        );
    }
}

export default RefDemo;