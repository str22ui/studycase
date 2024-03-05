import React from 'react';

function EventHandling() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Anda mengklik submit.');
    // Tambahan kode untuk menangani logika pengiriman data form, jika diperlukan
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

export default EventHandling;
