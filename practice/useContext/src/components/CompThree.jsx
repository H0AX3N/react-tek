import React, { useContext } from 'react'
import { TheContext } from '../App'

function CompThree() {
    const data = useContext(TheContext)
    return (
        <div>
            <p>{data}</p>
        </div>
    )
}

export default CompThree
