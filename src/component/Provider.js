import React, { Component } from 'react'
import store from '../utils/store';
import context from '../utils/context'
class Provider extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { store, children } = this.props
        return (
            <div>
                <context.Provider value={store}>
                
                    {
                        children
                    }
                </context.Provider>
            </div>
        );
    }
}

export default Provider;