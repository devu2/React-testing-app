import React, { Component } from 'react'
import axios from 'axios'
import '../header/navigation.css';

export default class Navigation extends Component {
       constructor(props){
        super(props);
        this.state = {
            user:{} ,
            password: '',
            fireErrors: '',
            person: {
                user_name: "Username"
            }
         }
     }

    logOut = async() =>{
            await axios.post("https://cite-plus-ba-before-mer-imkeud.herokuapp.com/api/v1/user/logout")
          .then(res => {
            console.log(res.status)
            localStorage.removeItem("authToken")
            window.location.replace("/"); 
          })
          .catch(err => {
            console.log(err);
          });
    } 
    

  componentDidMount() {
      if (!window.localStorage.getItem("authToken")) {
        //Direct person to Login
       window.location.replace("/"); 
     }

    if (window.localStorage.getItem("authToken")) {
      axios.defaults.headers.common[
        "Authorization"
      ] = window.localStorage.getItem("authToken");
       
      const userData = JSON.parse(window.localStorage.getItem("userData"));
      this.setState(() => ({
        person: {
            ...this.state.person,
            ...userData
        }
       }));
    }
  }
 
    render() {
        return (
            <div className="navigation">
                <div className="menu-icons">
                    <div className="bars"></div>
                    <div className="bars"></div>
                    <div className="bars"></div>
               </div>
               <div className="profile">
                   	<span className="login100-form-logo">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/512px-Circle-icons-profile.svg.png" alt="User " srcSet=""/>
                        <span>{this.state.person.user_name}</span>
					</span>
                    <div className="logout">
                        <button onClick={this.logOut} >Logout</button>
                    </div>
               </div>
            </div>
        )
    }
}