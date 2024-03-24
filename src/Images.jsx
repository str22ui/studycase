import React from 'react';
import gambarSaya from './jungkook.jpg';


const Images = () => {
  return (
    <div>
        <h1>Foto Jungkook</h1>
        <img src={gambarSaya} alt="" width={300} height={200} />
    </div>
  )
}

export default Images

























// ===url relatif===

//  <img src="jungkook.jpg" alt="" width={300} height={200} />
{/* <h1>Url relatif</h1> */}
{/* <img src="/images/jungkook.jpg" alt="Foto Jungkook" width={300} height={200} /> */}

// === url eksternal ===
// return <img src="https://picsum.photos/id/237/200/300" alt="Deskripsi Gambar" width={300}/>;

// === require ===
// return <img src={require('./jungkook.jpg')} alt="Deskripsi Gambar" width={300}/>;

// === variabel ===
// import React from 'react';

// const Images = () => {
//     const imagePath = '/images/jungkook.jpg';
//   return (
//     <div>
//       <h1>Foto Jungkook</h1>
//       return <img src={imagePath} alt="Deskripsi Gambar" width={300}/>;
//     </div>
//   );
// }

// export default Images;


// === import ===
// import React from 'react';
// import gambarSaya from './jungkook.jpg';


// const Images = () => {
//   return (
//     <div>
//         <h1>Foto Jungkook</h1>
//         <img src={gambarSaya} alt="" width={300} height={200} />
//     </div>
//   )
// }

// export default Images
