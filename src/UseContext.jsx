import React, { useContext } from 'react';
import MyContext from './MyContext';

const UseContext = () => {
    const value = useContext(MyContext);

    return (
        <div>
            <p>Value from context: {value}</p>
        </div>
    );
};

export default UseContext;
