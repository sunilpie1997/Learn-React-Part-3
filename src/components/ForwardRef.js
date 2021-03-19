import React from 'react';

//insead of attaching ref to a component, directly forward to dom element

const ForwardRef= React.forwardRef((props,ref) =>{
    return (
        <div>
            <input ref={ref}></input>
            
        </div>
    );
});

export default ForwardRef;