import React, {useRef, useEffect} from "react";

function DomMan() {
    const ref = useRef();
    const isRed = useRef(false);

    const handleClick = () => {
        if(ref.current) {
            ref.current.style.backgroundColor = isRed.current ? "red" : "green";
            isRed.current = !isRed.current;
        }
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <button className="px-4 py-2 rounded-lg bg-red-600" onClick ={handleClick} ref = {ref}>Click Me!</button>
        </div>
    );
}

export default DomMan;
