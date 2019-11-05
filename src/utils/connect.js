import React, { Component } from 'react'
import context from '../utils/context'
//高阶组件 接收组件 返回出去 传递props 
const connect = (Com) => {
    return class extends Component {
        render() {
            return (
                <div>
                    <context.Consumer>
                        {
                            (props) => {
                                return <Com {...props}  {...this.props}/>
                            }
                        }
                    </context.Consumer>

                </div>
            )
        }
    }
}
export default connect