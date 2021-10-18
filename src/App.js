import './App.css';
import pageOne   from './pages/pageOne.js'
import pageTwo   from './pages/pageTwo.js'
import pageThree from './pages/pageThree.js'

import React, { useState } from 'react'


function App() {
    const [count, setCount] = useState(0)
    const [page1, setpage1] = useState(pageOne)
    const [page2, setpage2] = useState(pageTwo)
    const [page3, setpage3] = useState(pageThree)



  return (
    <div className="App">
        <h1>Working</h1>
        <p>You clicked {count} times</p>
        <button onClick={()=> setCount(count + 1)} >++</button><br></br>
        <button onClick={()=> setCount(0)} >reset</button>

        {count === 1 ? <div>{page1}</div> : null}
        {count === 2 ? <div>{page2}</div> : null}
        {count === 3 ? <div>{page3}</div> : null}


    </div>
  );
}

export default App;
