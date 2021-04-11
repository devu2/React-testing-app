import React, { Component } from 'react'
import Navigation from '../Components/header/navigation'
import Footer from '../Components/Footer/footer'
import Wallpaper from '../Components/Body/Body'
export default class Dashboard extends Component {
    render() {
        return (
            <div>
              <Navigation />
              <Wallpaper />
              <Footer />
            </div>
        )
    }
}