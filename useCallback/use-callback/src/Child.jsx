import React from 'react'

const Child = ({ fun }) => {
    console.log("child rendered")
    return (
        <div>
            <button onClick={fun} className='bg-blue-500 text-white px-3 py-1 rounded-sm'>Click</button>
        </div>
    )
}

export default React.memo(Child)
