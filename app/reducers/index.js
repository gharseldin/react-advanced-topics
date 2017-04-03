let initialState = 0

export default function reducer(state=initialState, action) {
    switch(action.type){
        case 'INCREMENT_COUNT':
            return state + 1
            break
        default:
            return state    // Still pure since we are only 
                            // returning old state and not modifying it
    }
}