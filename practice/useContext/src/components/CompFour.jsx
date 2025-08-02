import React, { useContext } from 'react'
import { GoatContext } from '../App'

function CompFour() {
    const data = useContext(GoatContext)
    return (
        <div>
            <p>{data}</p>
        </div>
    )
}

export default CompFour
