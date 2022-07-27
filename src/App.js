// libraries
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { AiFillPrinter } from "react-icons/ai";

// styles
import './style/Variables.css';
import './style/App.css';

// modules
import Cv from './modules/Cv.js';

function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="App">
      <Cv ref={componentRef}/>
      <button className='print-cv-btn' onClick={handlePrint}><AiFillPrinter /></button>
    </div>
  );
}

export default App;
