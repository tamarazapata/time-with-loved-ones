
import  { useState } from 'react';
import LovedOneForm from './components/LovedOnesForm';
import LovedOnesList from './components/LovedOnesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";



function App() {
  const [lovedOnes, setLovedOnes] = useState([]);

  const addLovedOne = (newLovedOne) => {
    setLovedOnes([...lovedOnes, newLovedOne]);
  };

  return (
    <div className="app-container d-flex align-items-start justify-content-between">
      <div className="form-wrapper">
        <LovedOneForm onAddLovedOne={addLovedOne} />
      </div>
      <div className="list-wrapper">
        <LovedOnesList lovedOnes={lovedOnes} />
      </div>
    </div>
  );
}

export default App;