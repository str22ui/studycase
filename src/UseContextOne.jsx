import React, { useContext } from 'react';

// Membuat konteks
const UserContext = React.createContext();

// Komponen induk
function UseContextOne() {
  // Menyediakan nilai untuk konteks
  const user = { name: 'John', age: 30 };

  return (
    <UserContext.Provider value={user}>
      <UserProfile />
    </UserContext.Provider>
  );
}

// Komponen anak
function UserProfile() {
  // Menggunakan useContext untuk mengakses nilai konteks
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default UseContextOne;
