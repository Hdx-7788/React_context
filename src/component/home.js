import React, { Component } from 'react'
import  List from './list'
import connect from '../utils/connect'
class home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
            home
            <List/>
            </div>
        );
    }
}

export default connect(home);