import React, { Component } from 'react';
import AddComment from './AddComment';
import Comment from './Comment';
export class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            like: 0,
            post: '',
            title: ''
        }
    }


    // handleComment = (event) => {
    //     this.setState({ comment: event.target.value });
    // }
    handleLike = () => {
        this.setState({ like: this.state.like + 1 });
    }
    // addComment = (event) => {
    //     event.preventDefault();
    //     this.props.commentPush(this.state.comment)
    //     this.setState({ comment: '' });
    // }
    blogComment = [
        {
            comment: ''
        }
    ];
    commentPush = (argComment) => {
        this.blogComment.push(
            {
                comment: argComment
            }
        );
        this.setState(
            {
                comment: argComment
            }
        );
    };
    render() {
        return (
            <div>
                <div className='container'>

                    <h1>{this.props.elementTitle}</h1>
                    <p>{this.props.elementPost}</p><br />
                    {/* <form onSubmit={this.addComment}>
                        <input type='text' name='text' id='commentInput' placeholder='write your comment' value={this.state.comment} onChange={this.handleComment} />
                        <button className="btn btn-primary" >Comment</button><br /><br />
                    </form> */}
                    <AddComment commentPush={this.commentPush} />
                    {
                        this.blogComment.map((element, id) => {
                            return <Comment
                                elementComment={element.comment}
                                key={id}
                            />
                        })
                    }
                    {/* <span className='comment'>{this.props.elementComment}</span> */}
                    <br />
                    <i class="far fa-heart" onClick={this.handleLike}></i><span>{this.state.like}</span>
                </div>
            </div>

        )
    }
}

export default Post
