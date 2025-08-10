import React, { useRef } from 'react'

function RefPrac() {
    const h1Ref = useRef()
    const toggleRef = useRef(false)
    // const [toggleState, setToggleState] = useRef(false)
    function handleClick() {
        if(toggleRef.current) {
            h1Ref.current.style.backgroundColor = 'blue'
        }
        else {
            h1Ref.current.style.backgroundColor = 'red'
        }
        toggleRef.current = !toggleRef.current
    }
    return (
        <div>
            <h1 ref={h1Ref} style={{backgroundColor: 'red'}}>Text content</h1>
            <button onClick={handleClick} style={{outline: 'none'}}>Toggle</button>
        </div>
    )
}

export default RefPrac
