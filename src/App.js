import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Output from './Output';
import './Output.css'

function App() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [output, setOutput] = useState([]);

  const handleAddition = async () => {
    try {
      const response = await axios.post('/add', { num1, num2 });
      setOutput(response.data);
      console.log(response.data, "Response");
      console.log(output, "OUTPUT");
    } catch (error) {
      alert("Only postive number is valid")
      console.error(error, "Error occured in axios");
    }
  };




  return (
    <div className="App">

      <h1>Steps Additions</h1>

      <div>
        <label>First Number:</label>
        <input type="number" value={num1} onChange={e => setNum1(e.target.value)} />
      </div>

      <div>
        <label>Second Number:</label>
        <input type="number" value={num2} onChange={e => setNum2(e.target.value)} />
      </div>

      <button onClick={handleAddition}>Generate Steps</button>

      {output != '' && (
        <div className='outer-output'>
          <h3>{"{"}</h3>

          {output.map((output, index) => {
            return <Output key={index} index={index}  output={output} />
          })}

          <h3>{"}"}</h3>
        </div>
      )}

    </div >

  );
}

export default App;


