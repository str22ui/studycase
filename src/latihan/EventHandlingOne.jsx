import React, { useState } from 'react';

function EventHandlingOne() {
  // Membuat state untuk menyimpan nilai input
  const [inputValue, setInputValue] = useState('');

  // Fungsi penanganan perubahan input
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Fungsi penanganan pengiriman formulir
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted with value: ' + inputValue);
    // Lakukan operasi lain seperti mengirim data ke server
  };

  return (
    <div>
      <h2>Event Handling Example</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleChange} 
          placeholder="Enter something..." 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EventHandlingOne;
