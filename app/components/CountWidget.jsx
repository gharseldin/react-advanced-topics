import React from 'react'

let CountWidget = ({count, handleClick}/*destructuring props for ease of use*/) => (
    <div>
        <p> Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
    </div>
)

export default CountWidget