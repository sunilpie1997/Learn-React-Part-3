import React from 'react';

class Form extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            username:'',
            email:'',
        }

    }
    
    //for username change
    handleUsernameChange=(event)=>{

        this.setState({username:event.target.value});
    }

    //for email change
    handleEmailChange=(event)=>{
        this.setState({email:event.target.value});
    }

    handleFormSubmit=(event)=>{

        alert(`form submitted values:username-${this.state.username} and email-${this.state.email}`);

        //helps to prevent normal flow
        // submitted values will be stull there if we use it
        event.preventDefault();
        //page will not be reloaded
    }
    render()
    {
        const {username,email}=this.state;
        return(
        <form style={{textAlign:'center'}} onSubmit={this.handleFormSubmit}>
            <div >
                <label>Username</label>
                <input type="text" value={username} onChange={this.handleUsernameChange}/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" value={email} onChange={this.handleEmailChange}/>
            </div>
            <button type="submit">
                submit
            </button>

        </form>
        );
    }
}


export default Form;