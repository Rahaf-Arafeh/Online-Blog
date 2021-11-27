import React, { Component } from 'react';

export class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            newPost: '',
            comment: ''
        }

    };
    inputHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    handleAddNewPost = (event) => {
        event.preventDefault();
        this.props.arrayPush(this.state.title, this.state.newPost);
        this.setState({ title: '', newPost: '' });
    };


    render() {
        return (
            <div>
                <form className='form' onSubmit={this.handleAddNewPost}>
                    <label>Title :</label>
                    <input type='text' name='title' placeholder='title of your post..' value={this.state.title} onChange={this.inputHandler} required />
                    <label>New Post :</label>
                    <textarea rows='5' cols='40' name='newPost' placeholder='write your post here..' value={this.state.newPost} onChange={this.inputHandler} required />
                    <button className='btn' type='submit'>Add Post</button>
                </form>

            </div>
        )
    }
}

export default AddPost
