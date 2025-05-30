import React from 'react'

function CustomButton({ label, onClick, color }) {
    return (
        <button 
            style={{backgroundColor : color, color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', gap: '10px', cursor: 'pointer'}} 
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default CustomButton;


