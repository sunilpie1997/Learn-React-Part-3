import React from 'react';

const Memo=()=>{

    //logged once only
    console.log("memo component");
    return (
        <h2>
            Memo component
        </h2>
    );
}

export default React.memo(Memo);