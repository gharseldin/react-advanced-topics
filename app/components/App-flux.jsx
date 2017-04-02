import React from 'react'
import constants from '../constants/app-constants'
import {incrementAcitons} from '../actions/app-actions'
import {TodoStore} from '../stores/count-store' 

export default class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            count : TodoStore.getCount()
        }
        this.increment = this.increment.bind(this)
        this._onChange = this._onChange.bind(this)
    }

    componentDidMount(){
        TodoStore.addChangeListener(this._onChange)
    }

    componentWillMount(){
        TodoStore.removeChangeListener(this._onChange)
    }

    _onChange(){
        this.setState({
            count : TodoStore.getCount()
        })
    }

    increment(){
        incrementAcitons.incrementCount()
    }
    
    render(){
            return(
                <div>
                    <p>count: {this.state.count}</p>
                    <button onClick={this.increment} > increment </button>
                </div>
            )
    }
}
