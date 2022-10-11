import React from 'react';
import cl from './Button.module.scss';

export const Button = ({onClick, value, children, disabled}) => {
    return (
        <button
            value={value}
            onClick={onClick}
            disabled={disabled}
            className={cl.button}
        >
            {children ? children : value}
        </button>
    )
}