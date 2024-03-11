import React, { useState, useEffect, useRef, useContext } from 'react';

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
