import React from 'react';

class RegComp extends React.Component{

    render(){
        //will be logged twice
        console.log("Regular component render");

        return <h2>Regular component</h2>
    }
}

export default RegComp;