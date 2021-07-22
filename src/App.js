import React from 'react';
import './App.css';

function App() {
  let rows = Array.from(Array(13).keys());
  let cols = Array.from(Array(20).keys());
  return (
    <div className="App">
      <table>
        <tbody>
          {rows.map((row) => <tr key={row}>
            {
              cols.map((col) => <td key={col}> </td>)
            }
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
