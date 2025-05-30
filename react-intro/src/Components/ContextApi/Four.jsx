import React from 'react'
import Five from './Five'

function Four(props) {
    console.log(props)
    return (
        <div>
            <h1>Component Four</h1>
            <Five name = {props.name} age = {props.age} /> 
        </div>
    )
}

export default Four