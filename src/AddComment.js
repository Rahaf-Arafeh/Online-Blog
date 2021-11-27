import React, { Component } from 'react'

export class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
        }

    }

    handleComment = (event) => {
        this.setState({ comment: event.target.value })
    };
    addComment = (event) => {
        event.preventDefault();
        this.props.commentPush(this.state.comment)
        this.setState({ comment: '' });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addComment}>
                    <input type='text' name='text' id='commentInput' placeholder='write your comment' value={this.state.comment} onChange={this.handleComment} />
                    <button type='submit' className="btn btn-primary" >Comment</button><br /><br />
                </form>
            </div>
        )
    }
}


export default AddComment
