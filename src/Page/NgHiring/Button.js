
import React from 'react';

const Button = ({ label, onClick, className, style }) => {
    return (
        <button
            type="button"
            className={`btn fw-bold regular-btn align-self-center px-4 ${className}`}
            style={{ width: '100%', ...style }}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
