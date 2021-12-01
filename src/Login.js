import React, { Component } from 'react'

export class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    onChange = (event) => {
        if (event.target.name === 'email')
            this.setState({ email: event.target.value });
        else if (event.target.name === 'password')
            this.setState({ [event.target.name]: event.target.value })
    }
    onSubmit = (event) => {
        event.preventDefault();
        let usersArr = JSON.parse(localStorage.getItem('user'));
        usersArr.forEach((element) => {
            if (this.state.email !== element.email) {
                alert("You are not registered");
            } else if (
                this.state.password !== element.password
            ) {
                alert("Incorrect Password");

            }
            if (
                this.state.email === element.email &&
                this.state.password === element.password
            ) {
                alert("Welcome :)")
                window.location.href = "blog";
            }
        });

    }


    render() {
        return (
            <div>
                <form className='form' onSubmit={this.onSubmit}>
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
