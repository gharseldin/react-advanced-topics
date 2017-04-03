import {INCREMENT_COUNT} from '../constants/redux-constants'

function incrementCount(/*Optional data payload*/){
    return {
        type : INCREMENT_COUNT
    }
}

export {incrementCount}
