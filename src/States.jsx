import React from 'react';

class States extends React.Component {
  constructor(props) {
    super(props);
    // Inisialisasi state count dengan nilai awal 0
    this.state = {
      count: 0,
    };
  }

  // Metode untuk menambah nilai count saat tombol ditekan
  incrementCount = () => {
    // Menggunakan setState untuk memperbarui nilai count
    // Ini juga memastikan re-render komponen setelah state diperbarui
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        {/* Menampilkan nilai count dari state */}
        <h1>Count: {this.state.count}</h1>
        {/* Membuat tombol yang akan memanggil metode incrementCount saat ditekan */}
        <button onClick={this.incrementCount}>+</button>
      </div>
    );
  }
}

export default States;
