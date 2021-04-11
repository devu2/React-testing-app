import React, { Component } from 'react'
import Notification from '../header/notification'
import '../Body/body.css'

export default class Wallpaper extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        };
    }
    counts = ()=>{
       return this.setState({ count: this.state.count + 1 })

     }

    render() {
        return (
            <div className="wallpaper">
                <Notification notificationCount={this.state.count} />
                <h1>Click notify me <br/>You have clicked: <span>{this.state.count}</span> times</h1>
                <button type="submit" onClick={this.counts}>Notify Me </button>
            </div>
        )
    }
}