import { useState } from 'react';
import './App.css';
import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger';

function App() {

  const [name, setName] = useLocalStorage('name','');
  useUpdateLogger(name);

  return (
    <input 
      style={{'marginLeft':'100px','marginTop':'100px'}} 
      type='text' 
      value={name} 
      onChange={e => setName(e.target.value)} />
  );
}

export default App;
