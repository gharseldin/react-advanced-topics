import React from 'react'
import NavEnum from './utils/NavEnum'

export default class Nav extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <a onClick={() => this.props.gotoNavItem(NavEnum.Home)}>Home </a>
                <a onClick={() => this.props.gotoNavItem(NavEnum.About)}>About </a>
            </div>
        )
    }
}