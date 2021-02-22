import React, { PureComponent } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends React.Component{

    constructor(props){
        super(props);
        this.state={name:'sunil'}
    }

    componentDidMount()
    {
            this.setState({
                name:'sunil'
            })
    }

    render(){
        
        //will be logged once
        console.log("parent component render");
        return(
            <React.Fragment>
                <h1>Parent component</h1>
                <RegComp name={this.state.name}/>

                <PureComp name={this.state.name}/>
            </React.Fragment>
        );
    }
}

   

export default ParentComp;