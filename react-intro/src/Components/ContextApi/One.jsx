import React, { createContext } from 'react'
import Two from './Two'
import Five from './Five'

export const DetailsContext = createContext()

function One() {
    return (
        <DetailsContext.Provider value={{ name: "John", age: 25 }}>
            <div>
                <h1>Component One</h1>
                {/* <Two name="John" age={25} /> */}
                <Five />
            </div>
        </DetailsContext.Provider>
    )
}

export default One
