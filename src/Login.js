import React, { Component } from 'react'

export class Login extends Component {
    state = {
        email: '',
        password: '',
        loggedIn: false
    }
    // Admin = {
    //     email: 'arafeh.rahaf@gmail.com',
    //     password: 123
    // }
    onChange = (event) => {
        if (event.target.name === 'email')
            this.setState({ email: event.target.value });
        else if (event.target.name === 'password')
            this.setState({ password: event.target.value })
    }
    // onSubmit = (event) => {
    //     event.preventDefault();
    //     let usersArr = JSON.parse(localStorage.getItem('user'));
    //     for (let i = 0; i <= usersArr.length; i++) {
    //         if (this.state.email === usersArr[i].email && this.state.password === usersArr[i].password)
    //             console.log('succsess');
    //         else console.log('fail');

    //     }

    // }
    render() {
        return (
            <div>
                <form className='form' onSubmit={this.props.handleSubmit}>
                    <label>Enter Your email :</label>
                    <input type='email' name='email' value={this.state.email} onChange={this.onChange} />
                    <label>Enter Your Password :</label>
                    <input type='password' name='password' value={this.state.password} onChange={this.onChange} />
                    <button type="submit" className="btn">Sign In</button>
                </form>
            </div>
        )
    }
}

export default Login
