import React from 'react'
import Home from './Home.jsx'
import About from './About.jsx'

import NavEnum from './utils/NavEnum'
import Nav from './Nav.jsx'

import {Route, Router, hashHistory} from 'react-router'
import {Link} from 'react-router'
export default class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            view : <Home />
        }
        this.gotoNavItem = this.gotoNavItem.bind(this)
    }

    gotoNavItem(navItem){
        console.log(navItem)
        var redirect = <Home />
        console.log(NavEnum.About)
        switch (navItem){
            case NavEnum.Home:
                redirect = <Home/>
                console.log("we have ended in the Home case")
                console.log(redirect)
                break
            case NavEnum.About:
                redirect = <About/>
                console.log("we have ended in the About case")
                console.log(redirect)
                break
            default :
                redirect = <Home />
                console.log("we have ended in the default case")
        
        }
        this.setState({
            view : redirect
        })
    }

    render(){
        return (
            <div>
                <header>
                <h3> Welcome to the application</h3>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
                </header>
                {/*This child will be selected automatically by the router depending on the Link clicked*/}
                {this.props.children}
                <footer>
                    This is the footer
                </footer>
            </div>
        )
    }
}