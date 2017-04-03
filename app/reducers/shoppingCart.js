let initialState = []
export default function shoppingCart(state, action){
    switch(action.type){
        case ADD_TO_CART:
            return [...state.shopingCart, action.payload]
        break
        case REMOVE_FROM_CART:
            return state.shopingCart.filter(id => id !== action.payload)
        break
        default:
            return state
    }
}