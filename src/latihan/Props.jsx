import React from 'react';

// Komponen Anak
const MyComponent = ({ name }) => {
  return <h1>Halo, {name}!</h1>;
};
const Umur = ({ age }) => {
    return <h1>Umur Saya {age}!</h1>;
  };

// Komponen Induk
const Props = () => {
  const name = "Satria";
  const age = 20
  return (
    <div>
      <h2>Ini adalah aplikasi React</h2>
      <MyComponent name={name} />
      <Umur age={age}/>
    </div>
  );
};

export default Props;

// Dua fungsi di atas, MyComponent dan Umur, merupakan contoh komponen anak dalam React. Komponen anak adalah blok pembangun UI yang dapat digunakan kembali.

// MyComponent menerima prop name dan menampilkan teks "Halo, {name}!".
// Umur menerima prop age dan menampilkan teks "Umur Saya {age}!".\Props adalah contoh komponen induk. Komponen induk bertanggung jawab untuk menggabungkan beberapa komponen anak dan mengelola state.

// Props mendefinisikan dua variabel: name dan age.
// Props kemudian menggunakan MyComponent dan Umur sebagai child component.
// Props meneruskan prop name ke MyComponent dan prop age ke Umur.