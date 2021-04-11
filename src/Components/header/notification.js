import React, { Component } from 'react'
import '../header/notification.css'

export default class Notification extends Component {
    
    render() {
        return (
            <div>
               <div className="notification" >
                  <p>You are notified {this.props.notificationCount} times</p>
               </div>
            </div>
        )
    }
}