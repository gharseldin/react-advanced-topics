
import React from 'react'
import {incrementCount} from '../actions/redux-actions'
import CountWidget from '../components/CountWidget.jsx'

export default class CountWidgetContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : props.store.getState()
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        this.props.store.subscribe(this. handleChange)
    }

    handleChange(){
        this.setState({
            count: this.props.store.getState()
        })
    }
    handleClick(){
        // this.setState({
        //     count : this.state.count + 1
        // })

        // Instead of invoking state from here we want to invoke it
        // through the action creator
        let action = incrementCount()
        this.props.store.dispatch(action)
        console.log(action)
    }

    render(){
        return <CountWidget count={this.state.count} handleClick={this.handleClick} />
    }
}