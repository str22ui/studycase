
import React from 'react';
import { Link } from 'react-router-dom';

const Routerr = () => {
  return (
    <ul>
      <li>
        <Link to="/">Looping List</Link>
      </li>
      <li>
        <Link to="/props">Props</Link>
      </li>
      <li>
        <Link to="/minione">States</Link>
      </li>
    </ul>
  );
};

export default Routerr;









// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoopingList from './latihan/LoopingList';
// import Props from './latihan/Props';
// import Navigation from './Navigation'; // Komponen navigasi yang berisi Link

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Navigation /> {/* Komponen navigasi dengan Link */}
//         <Routes>
//           <Route path="/" element={<LoopingList />} />
//           <Route path="/props" element={<Props />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navigation = () => {
//   return (
//     <ul>
//       <li>
//         <Link to="/">Looping List</Link>
//       </li>
//       <li>
//         <Link to="/props">Props</Link>
//       </li>
//     </ul>
//   );
// };

// export default Navigation;
