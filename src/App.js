import './App.css';
import ClassOne from './ClassOne';
import Coba from './Coba';
import EventHandling from './EventHandling';
import FunctionalOne from './FunctionalOne';
import Halo from './Halo';
import LoopingList from './LoopingList';
import Props from './Props';
import States from './States';
import UseContext from './UseContext';
import UseEffect from './UseEffect';
import UseRef from './UseRef';
import UseStates from './UseStates';
import UseRefOne from './useRefOne';
function App() {
  return (
    <div>
      <h1>Hello, world</h1>
      {/* //Menampilkan Functional Component */}
      <Coba />
      
      <Halo />
      
      <FunctionalOne /> 

      {/* //Menampilkan Class Component */}
      <ClassOne />

      {/* //Menampilkan Props */}
      <Props />

      {/* //Menampilkan States */}
      <States />

      {/* Menampilkan UseStates */}
      <UseStates />

      {/* //Menampilkan UseEffect */}
      <UseEffect />

      {/* //Menampilkan UseRef */}
      <UseRef />

      <UseRefOne />

      {/* Menampilkan UseContext */}
      <UseContext />

      {/* Menampilkan Event Handling */}
      <EventHandling />

      <LoopingList />
      </div>
  );
}

export default App;
