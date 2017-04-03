// Taking a prior application state supplied by the redux store
// and an action with a type and optional payload, the reducer is going
// to change the application state by creating a new one using the old
// state and the change

let initialState = 0

function reducer(state=initialState, action) {
    switch(action.type){
        case 'INCREMENT_COUNT':
            return state + 1
            break
        default:
            return state    // Still pure since we are only 
                            // returning old state and not modifying it
    }
}

let state = reducer(0, {type : 'INCREMENT_COUNT'})
console.log(state)
let result = reducer(state, {type : 'INCREMENT_COUNT'})
console.log(result)

module.exports = reducer