import React, { Component } from 'react'

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    }
    userDataArr = [];
    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.userDataArr.push(this.state);
        if (!localStorage.getItem('user')) {
            localStorage.setItem('user', JSON.stringify(this.userDataArr));
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
                        <input type='text' name='username' value={this.state.username} onChange={this.onChange} pattern="[A-Za-z]{3,10}" title="must contain at least 3 letters and at most 10 letters " required />
                        <label>Enter Your email :</label>
                        <input type='email' name='email' value={this.state.email} onChange={this.onChange} />
                        <label>Enter Your Password :</label>
                        <input type='password' name='password' value={this.state.password} onChange={this.onChange} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                        <button type="submit" className="btn btn-primary" id='signUp-btn'>Sign Up</button>
                    </form>
                </div>
                <div className='image' ><img src='https://images.pexels.com/photos/4092518/pexels-photo-4092518.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='lady from victorian era' /></div>
            </div>
        )
    }
}

export default Register
