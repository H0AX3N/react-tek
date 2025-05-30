import React, { useContext } from 'react'
import { DetailsContext } from './One'

function Five({ name, age }) {
    const values = useContext(DetailsContext)
    return (
        <div>
            <h1>Component Five</h1>
            <p>Name : {values.name}</p>
            <p>Age : {values.age}</p>
        </div>
    )
}

export default Five