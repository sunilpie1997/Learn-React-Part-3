import React from 'react';

//lifecycle methods belonging to mounting stage
class LifecycleD extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            name:'Sunil',
        }
        console.log('LifecycleD constructor')
    }

    static getDerivedStateFromProps(props,state)
    {
        //should return object or null
        console.log('LifecycleD getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('LifecycleD shouldComponentUpdate');
        ///if return false, no re-render
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleD getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(){
        console.log('LifecycleD componentDidUpdate')
    }

    handleButtonClick=()=>{
        this.setState({name:'sunil prajapat'})
    }
    render(){
        console.log('LifecycleD render');
        //LifecycleD is child of LifecycleC, so we can see order of execution
        return(
            <div>
            <h1>Lifecycle D</h1>
            
            </div>

        )
    }
}


export default LifecycleD;