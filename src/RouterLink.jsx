import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoopingList from './latihan/LoopingList'; // 
import Props from './latihan/Props'; // 

const ReactComponent = () => {
  return (
    <div>
      <h2>Looping Ls</h2>
      <Router>
        <ul>
          <li>
            <Link to="/">Looping List</Link> 
            <Link to="/props">Props</Link> 
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<LoopingList />} /> 
          <Route path="/props" element={<Props />} /> 
        </Routes>
      </Router>
    </div>
  );
};

export default ReactComponent;



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
