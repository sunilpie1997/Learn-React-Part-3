import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state={
            hasError:false
        }

    }

    static getDerivedStateFromError(error,info)
    {
        return {
            hasError:true
        }
    }

    render() {
        if(this.state.hasError)
        {
            return <h2>Something went wrong</h2>
        } 
        return this.props.children;
    }
}
export default ErrorBoundary;