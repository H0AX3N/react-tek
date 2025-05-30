import React from 'react'

const Child = React.memo(({name}) => {
    console.log("child rendered");
    return (
        <div>
            <h1>I am {name}</h1>
        </div>
    )
})

export default Child;

