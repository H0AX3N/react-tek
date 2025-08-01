import React, { useContext } from 'react'
import { LastNameContext } from '../App'

function CompTwo() {
    const data = useContext(LastNameContext)
    return (
        <div>
            <p>{data}</p>
        </div>
    )
}

export default CompTwo
