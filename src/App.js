// libraries
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

// styles
import './style/App.css';

// modules
import Cv from './modules/Cv.js';

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div>
        vgjvyhkgusilghruesiltghrueslthriesntgfrjiuoaslfuejdlhfueilwahbfurjkablfgehuial
      </div>
    );
  }
}

function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="App">
      <Cv ref={componentRef}/>
      <button className='print-cv-btn' onClick={handlePrint}>Print CV</button>
    </div>
  );
}

export default App;
