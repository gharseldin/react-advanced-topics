import React from 'react'
import Home from './Home.jsx'

import NavEnum from './utils/NavEnum'
import About from './About.jsx'
import Nav from './Nav.jsx'

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
                <Nav gotoNavItem = {this.gotoNavItem} />
                {this.state.view}
            </div>
        )
    }
}