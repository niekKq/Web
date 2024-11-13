// src/components/ColumnBox.js
import React from 'react';
import './ColumnBox.css';

function ColumnBox({ children }) {
    return (
        <div className="column-2">
            {children}
        </div>
    );
}

export default ColumnBox;
