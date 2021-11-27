import React, { Component } from 'react'

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    }
    userDataArr = [this.state];
    onChange = (event) => {
        if (event.target.name === 'username')
            this.setState({ username: event.target.value });
        else if (event.target.name === 'email')
            this.setState({ email: event.target.value });
        else if (event.target.name === 'password')
            this.setState({ password: event.target.value })
    }
    onSubmit = (event) => {
        event.preventDefault();
        if (!localStorage.getItem('user')) {
            localStorage.setItem('user', JSON.stringify(this.userDataArr))
        }
        else {
            let storage = JSON.parse(localStorage.getItem("user"));
            storage.push(this.state);
            localStorage.setItem("user", JSON.stringify(storage));
        }
    }
    render() {
        return (
            <div className='home'>
                <div className='content'>
                    <form className='form' onSubmit={this.onSubmit}>
                        <label>Enter Your Name :</label>
                        <input type='text' name='username' value={this.state.username} onChange={this.onChange} />
                        <label>Enter Your email :</label>
                        <input type='email' name='email' value={this.state.email} onChange={this.onChange} />
                        <label>Enter Your Password :</label>
                        <input type='password' name='password' value={this.state.password} onChange={this.onChange} />
                        <button type="submit" className="btn btn-primary" id='signUp-btn'>Sign Up</button>
                    </form>
                </div>
                <div className='image' ><img src='https://images.pexels.com/photos/4092518/pexels-photo-4092518.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='lady from victorian era' /></div>
            </div>
        )
    }
}

export default Register
