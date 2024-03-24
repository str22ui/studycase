import React, { useState, useEffect, useRef } from 'react';

// Buat context untuk menyimpan daftar belanja
const ShoppingContext = React.createContext();

// Komponen untuk daftar belanja
const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const itemInput = useRef(null);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('shoppingList'));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    const newItem = itemInput.current.value;
    if (newItem !== '') {
      setItems(prevItems => [...prevItems, newItem]);
      itemInput.current.value = '';
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <h2>Daftar Belanja</h2>
      <input type="text" ref={itemInput} />
      <button onClick={addItem}>Tambah Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItem(index)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Komponen utama
const MiniOne = () => {
  return (
    <div>
      <ShoppingContext.Provider value={{}}>
        <ShoppingList />
      </ShoppingContext.Provider>
    </div>
  );
};

export default MiniOne;

// return (
//   <div className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow-lg">
//     <h2 className="text-xl font-semibold mb-4">Daftar Belanja</h2>
//     <div className="flex mb-4">
//       <input 
//         type="text" 
//         ref={itemInput} 
//         className="flex-1 mr-2 py-1 px-2 border rounded focus:outline-none focus:ring focus:border-blue-300" 
//         placeholder="Masukkan item..."
//       />
//       <button 
//         onClick={addItem} 
//         className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//       >
//         Tambah Item
//       </button>
//     </div>
//     <ul>
//       {items.map((item, index) => (
//         <li key={index} className="flex justify-between items-center mb-2 py-1 px-2 bg-white shadow-md rounded">
//           <span>{item}</span>
//           <button 
//             onClick={() => deleteItem(index)} 
//             className="py-1 px-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
//           >
//             Hapus
//           </button>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// import React from 'react';

// function MyComponent() {
//     return (
//         <div>
//             {/* JSX content */}
//         </div>
//     );
// }

// export default MyComponent;

// // File: App.js

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/contact">
//             <Contact />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
