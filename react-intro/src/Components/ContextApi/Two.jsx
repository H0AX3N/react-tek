import React from 'react'
import Three from './Three'

function Two({ name, age }) {
    return (
        <div>
            <h1>Component Two</h1>
            <Three name = {name} age = {age} />
        </div>
    )
}

export default Two
