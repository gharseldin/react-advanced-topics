import constants from '../constants/app-constants'
import dispatcher from '../dispatcher/dispatcher'
import {EventEmitter} from 'events'
// Backing Variables
let _count = 0

function getCount(){
    return _count
}

function incrementCount(){
    _count = _count + 1
}

// Define the actual store
export let TodoStore = Object.assign({}, EventEmitter.prototype, {
    getCount: getCount,
    emitChange : function() {
        this.emit('CHANGE_EVENT')
    },
    addChangeListener: function(callback) {
        this.on('CHANGE_EVENT', callback)
    },
    removeChangeListener: function(callback) {
        this.removeListener('CHANGE_EVENT', callback)
    }
})


// Register with the dispatcher 
dispatcher.register(action => {
    console.log(`inside cb: ${action}`)
    switch (action.actionType){
        case 'INCREMENT':
        console.log(`inside INCREMENT case`)
        incrementCount()
        console.log(`count is now ${getCount()}`)
        TodoStore.emitChange()
        break
    }
})