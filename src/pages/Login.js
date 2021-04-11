import React, { Component } from 'react'
import Footer from '../Components/Footer/footer'
import Logins from '../Components/Login/login'
export default class Login extends Component {
    render() {
        return (
            <div>
                <Logins />
                <Footer />
            </div>
        )
    }
}