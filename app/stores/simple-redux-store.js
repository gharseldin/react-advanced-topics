function createStore (reducer, initialState){
    let state = initialState
    let subscribers = []

    function getState(){
        return state
    }

    function subscribe(callback){
        subscribers.push(callback)
    }

    function dispatch(action){
        state = reducer(state, action)
        subscribers.forEach(subscriberCallback => {
            subscriberCallback()
        })
    }
    return  {
        getState,
        subscribe,
        dispatch
    }
}

let reducer = require ('../../reducers')
let store = createStore(reducer, 0)
console.log(store.getState())

store.subscribe(() => {
    console.log(`Current state: ${store.getState()}`)
})

store.dispatch({type : 'INCREMENT_COUNT' })
store.dispatch({type : 'INCREMENT_COUNT' })
store.dispatch({type : 'INCREMENT_COUNT' })
store.dispatch({type : 'INCREMENT_COUNT' })