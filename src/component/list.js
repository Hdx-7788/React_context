import React, { Component } from 'react'
import connect from '../utils/connect'
class list extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        console.log(this.props)
        return (

            <div>
                {this.props.homeinner.name}
                1111
            </div>
        );
    }
}

export default connect(list);