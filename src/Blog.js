import React, { Component } from 'react'
import AddPost from './AddPost';
import Post from './Post';

export class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            post: '',
            comment: ''
        }
    }
    blogData = [
        {
            title: 'first blog',
            content: 'welcome to my blog'
        }
    ];
    // blogComment = [
    //     {
    //         comment: ''
    //     }
    // ]
    arrayPush = (argTitle, argPost) => {
        this.blogData.push(
            {
                title: argTitle,
                content: argPost
            }
        );
        this.setState({
            title: argTitle,
            post: argPost,
        }
        );
    }
    // commentPush = (argComment) => {
    //     this.blogComment.push(
    //         {
    //             comment: argComment
    //         }
    //     );
    //     this.setState(
    //         {
    //             comment: argComment
    //         }
    //     );
    // }
    render() {
        return (
            <div>
                <AddPost arrayPush={this.arrayPush} />
                {
                    this.blogData.map((element, id) => (
                        <Post
                            elementTitle={element.title}
                            elementPost={element.content}
                            key={id}
                        />
                    ))}
                {/* {
                    this.blogComment.map((element, id) => (
                        <Post
                            elementComment={element.comment}
                            key={id}
                        />
                    ))} */}


            </div >
        );
    }
}

export default Blog
