import React from 'react';

// Array berisi data
const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

// Komponen yang melakukan looping list 
const FruitList = ({ fruits }) => {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
};

// Komponen utama
function LooppingList() {
  return (
    <div>
      <h2>Daftar Buah :</h2>
      <FruitList fruits={fruits} />
    </div>
  );
}
export default LooppingList;

// import React from 'react';

// // Deklarasi array nama
// const names = ['James', 'Paul', 'John', 'George', 'Ringo'];

// // Komponen anak untuk menampilkan nama
// const NameList = ({ names }) => {
//   return (
//     <ul>
//       {names.map((name, index) => (
//         <li key={index}>{name}</li>
//       ))}
//     </ul>
//   );
// };

// // Komponen induk
// function App() {
//   return (
//     <div>
//       <h2>Daftar Nama:</h2>
//       <NameList names={names} />
//     </div>
//   );
// }
// export default App;
