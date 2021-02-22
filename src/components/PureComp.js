import React from 'react';

class PureComp extends React.PureComponent{

    render(){
        // will be logged only once
        console.log("pure component render");

        return <h2>Pure component</h2>
    }
}

export default PureComp;