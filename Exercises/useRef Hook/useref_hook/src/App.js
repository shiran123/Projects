import React, { useEffect, useRef, useState } from 'react'
import './App.css';

//Stop re-render, when value get changed

export default function App() {

  const [name, setName] = useState('')
  const renderCount = useRef(1)

  // renderCount.current = renderCount.current + 1

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current}</div>
    </>
  );
}

//Access html elements

export default function App() {

  const [name, setName] = useState('')
  const inputRef = useRef();

  function focus() {
    inputRef.current.focus()
  }
  
  return (
    <>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </>
  );
}

//Get previous value

export default function App() {

  const [name, setName] = useState('')
  const prevName = useRef();

  useEffect(() => {
    console.log("Initial run... " + "==> "+name);
    prevName.current = name
  }, [name])

  
  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name} and it used to be {prevName.current}</div>
    </>
  );
}

