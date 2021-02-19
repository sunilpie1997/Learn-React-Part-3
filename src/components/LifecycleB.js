import React from 'react';

//lifecycle methods belonging to mounting stage
class LifecycleB extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            name:'Sunil',
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props,state)
    {
        //should return object or null
        console.log('LifecycleB getDerivedStateFromProps');
        return null;
    }

    componentDidMount(){
        console.log('LifecycleB componetDidMount');
    }

    render(){
        console.log('LifecycleB render');
        return(
            <h1>LifecycleB</h1>
        )
    }
}


export default LifecycleB;