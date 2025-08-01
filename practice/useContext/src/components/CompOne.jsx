import React, { useContext } from 'react'
import {FirstNameContext} from '../App'

function CompOne() {
    const data = useContext(FirstNameContext);
    return (
        <div>
            <p>name</p>
            <p>{data}</p>
        </div>
    )
}

export default CompOne
