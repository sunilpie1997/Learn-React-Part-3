import React from 'react';
import LifecycleB from './LifecycleB';

//lifecycle methods belonging to mounting stage
class LifecycleA extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            name:'Sunil',
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props,state)
    {
        //should return object or null
        console.log('LifecycleA getDerivedStateFromProps');
        return null;
    }

    componentDidMount(){
        console.log('LifecycleA componetDidMount');
    }

    render(){
        console.log('LifecycleA render');
        //LifecycleB is child of LifecycleA, so we can see order of execution
        return(
            <div>
            <h1>Lifecycle A</h1>
            <LifecycleB/>
            </div>

        )
    }
}


export default LifecycleA;