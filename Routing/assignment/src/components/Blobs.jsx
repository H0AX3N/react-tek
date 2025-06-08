import React from 'react'

function Blobs() {
    return (
        <div>
            <div className="fixed top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#f17848] opacity-50 blur-[120px] rounded-full pointer-events-none" />
            <div className="fixed bottom-[80px] right-[-120px] w-[280px] h-[280px] bg-[#e2517a] opacity-40 blur-[100px] rounded-full pointer-events-none" />
            <div className="fixed top-[60%] left-[30%] w-[220px] h-[220px] bg-[#f83b22] opacity-30 blur-[100px] rounded-full pointer-events-none" />
        </div>
    )
}

export default Blobs
