import React, { Component } from 'react'

export class Comment extends Component {
    render() {
        return (
            <div>
                <span className='comment'>{this.props.elementComment}</span>
            </div>
        )
    }
}

export default Comment
