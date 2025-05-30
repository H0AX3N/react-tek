import React from 'react'
import Four from './Four'

function Three({ name, age }) {
    console.log(name, age)
    return (
        <div>
            <h1>Component Three</h1>
            <Four name = {name} age = {age}/>
        </div>
    )
}

export default Three