// A pure function is basically any function that has no side effects
// nothing happens inside that function other than what is returns
// no modifying of global state or modifying anything outside the funtion

function add(x, y){
    return x + y
}

// same output no matter how many times we call it
add (2, 4) //6
add (2, 6) //6

// An example of an unpure version of this function would be
let timesCalled = 0
function addImpure(x, y){
    return `Times Called: ${++timesCalled} Result: ${x + y}`
}

console.log(addImpure(2, 4)) // Times Called: 1 Result: 6
console.log(addImpure(2, 4)) // Times Called: 2 Result: 6

// Example of impure function with Arrays 
function addToArray(array, element){
    array.push(element)
}
// A pure way to implement it
function addToArrayPure(array, element){
    return [...array, element]
}

let names = ['tim', 'Joe', 'Chuck']
let result = addToArrayPure(names, 'sue')
console.log(result)     // [ 'tim', 'Joe', 'Chuck', 'sue' ]
console.log(names)      // [ 'tim', 'Joe', 'Chuck' ]

// Example of impure functions with Objects
function addToObjectImpure (obj, prop, value){
    obj(prop) = value
    return obj  // Even though the the original object is returned
                // This is sometimes returned to enable chaining
}

// A pure way to do this would be
function addToObjectPure(obj, prop, value){
    //Object.assign is used to do a clone
    return Object.assign({}, obj, {
        [prop]: value   // [] around prop is ES6 feature to 
                        // dynamically find the value of prop
    })
}

// Object spread in ES7 makes things even more clean 
// but will not work with this eco system

// function addToObjectPureSpread(obj, prop, value){
//     return{
//         ...obj,
//         [prop] : value
//     }
// }

let person  = {
    name: 'tim'
}

let result2 = addToObjectPure(person, 'age', 20)
console.log(result2)            // { name: 'tim', age: 20 }
console.log(person)             // { name: 'tim' }