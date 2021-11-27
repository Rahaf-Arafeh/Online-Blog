import React, { Component } from 'react';
import Login from './Login';
// import Blog from './Blog';
// import Register from './Register';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loggedIn: false
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let userStorage = JSON.parse(localStorage.getItem("user"));

        userStorage.forEach((element) => {
            if (this.state.email === element.email && this.state.password === element.password) {
                this.setState({ loggedIn: true });
            }
        });
    }
    // if (this.state.loggedIn == false) {
    //     alert("not Found")
    // }}
    // if (correctIndex != null && this.state.password === userStorage[correctIndex].password) {
    //     this.setState({
    //         loggedin: true,
    //         role: userStorage[correctIndex].role,
    //         loggedInName: userStorage[correctIndex].name
    //     })
    // }

    render() {
        // switch (this.state.loggedIn) {
        //     case true: return (

        //         <Routes>
        //             <Route path='blog' element={<Blog />} />
        //         </Routes>

        //     )
        //     case false: return (

        //         <Routes>
        //             <Route path='register' element={<Register />} />
        //         </Routes>

        //     );
        //     default:
        return (
            <div>
                <div className='home'>
                    <div className='content'><h2 className='desc'>This <span className='pink-span'>Blog </span>talks about everything distinguishes the <span className='pink-span'>Victorian era </span>from art and literature to fashion.If you are interested, <span className='pink-span'>sign in to learn more</span></h2><Login hanleSubmit={this.handleSubmit} /></div>

                    <div className='image'><img src='https://images.pexels.com/photos/3682153/pexels-photo-3682153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='lady from vicotrain era' /></div>
                </div>
            </div>
        )
    }
}


export default Home
