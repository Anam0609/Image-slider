import React from 'react';
import Sliders from './components/Slider/Sliders';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='container-fluid'>
        <div className='row'>
          <div className="col-md-12 px-0">
            <Header/>
            <Sliders />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
