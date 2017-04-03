import {combineReducers} from 'redux'
import {ADD_TO_CART, REMOVE_FROM_CART, CHANGE_CATEGORY} from '../constants/app-constants'
import activeCategory from './activeCategory'
import products from './products'
import shoppingCart from './shoppingCart'

// we can use the combineReducers function to combine all our reducers in a neat way
let reducer = combineReducers(activeCategory, products, shoppingCart)
export default reducer


// instead of combining them in one reducer like this
/*
function reducer(state=initialState, action){
    return {
        activeCategory: activeCategory(state, action),
        producst: activeCategory(state, action),
        shoppingCart: activeCategory(state, action),

    }
}
*/