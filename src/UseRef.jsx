import React, { useRef } from 'react';

const UseRef = () => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.focus();
    };
    
    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Focus Input</button>
        </div>
    );
};
export default UseRef;
