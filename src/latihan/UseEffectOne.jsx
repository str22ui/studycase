import React, { useState, useEffect } from 'react';

function UseEffectTwo() {
  // State untuk menyimpan angka
  const [number, setNumber] = useState(0);

  // Effect untuk menyimpan dan memuat ulang nilai angka dari localStorage saat komponen dimount atau angka berubah
  useEffect(() => {
    // Mengecek apakah ada nilai angka yang tersimpan di localStorage
    const storedNumber = localStorage.getItem('number');
    // Jika ada, mengubah nilai angka menjadi nilai dari localStorage
    if (storedNumber) {
      setNumber(parseInt(storedNumber));
    }
  }, []); // Dependency array kosong agar efek hanya berjalan sekali setelah komponen dimount

  // Effect untuk menyimpan nilai angka ke localStorage setiap kali nilai angka berubah
  useEffect(() => {
    // Menyimpan nilai angka ke localStorage
    localStorage.setItem('number', number);
  }, [number]); // Menyertakan number sebagai dependency agar efek berjalan setiap kali nilai angka berubah

  return (
    <div>
      <p>Angka: {number}</p>
      <button onClick={() => setNumber(prevNumber => prevNumber + 1)}>Tambah 1</button>
    </div>
  );
}

export default UseEffectTwo;
