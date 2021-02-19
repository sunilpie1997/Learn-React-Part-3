import React from 'react';
import LifecycleD from './LifecycleD';

//lifecycle methods belonging to mounting stage
class LifecycleC extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            name:'Sunil',
        }
        console.log('LifecycleC constructor')
    }

    static getDerivedStateFromProps(props,state)
    {
        //should return object or null
        console.log('LifecycleC getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('LifecycleC shouldComponentUpdate');
        ///if return false, no re-render
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleC getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(){
        console.log('LifecycleC componentDidUpdate')
    }

    handleButtonClick=()=>{
        this.setState({name:'sunil prajapat'})
    }
    render(){
        console.log('LifecycleC render');
        //LifecycleD is child of LifecycleC, so we can see order of execution
        return(
            <div>
            <h1>Lifecycle C</h1>
            <button onClick={this.handleButtonClick}>{this.state.name}</button>
            <LifecycleD/>
            </div>

        )
    }
}


export default LifecycleC;