import React, { useRef } from 'react';

const UseRefOne = () => {
    const countRef = useRef(0);

    const incrementCount = () => {
        countRef.current += 1;
        console.log("Current count:", countRef.current);
    };

    return (
        <div>
            <p>Current Count: {countRef.current}</p>
            <button onClick={incrementCount}>Increment Count</button>
        </div>
    );
};

export default UseRefOne;

// Ref yang dibuat dengan useRef akan tetap memiliki nilai yang sama antara render, 
// kecuali Anda mengubah nilai dari properti .current secara langsung.
//  Namun, perubahan pada nilai .current tidak akan memicu re-render komponen. 
//  Oleh karena itu, meskipun nilai .current berubah saat tombol diklik dan di-log di konsol, 
//  nilai yang ditampilkan di dalam elemen JSX tidak akan berubah, karena komponen tidak di-re-render.

// import React, { useState } from 'react';

// const UseRefOne = () => {
//     const [count, setCount] = useState(0);

//     const incrementCount = () => {
//         setCount(count + 1);
//     };

//     return (
//         <div>
//             <p>Current Count: {count}</p>
//             <button onClick={incrementCount}>Increment Count</button>
//         </div>
//     );
// };

// export default UseRefOne;
