// import React, { useState } from 'react';

import Input from './components/Input';
import Button from './components/Button';

import './App.css';
import { useState } from 'react';

const App = () => {
  const [valueShow, setValueShow] = useState([])
  function koiFunction() {
    console.log("Perfect chal raha h bhai mazza aagaya");
    // setValueShow("Perfect chal raha h bhai mazza aagaya");
    const names = ['Bruce', 'Clark', 'Diana']
    setValueShow(names)
  }
  
return(<>
<Button onMai={koiFunction}/>
{valueShow.map((el,index) => <h1 key={index} style={{color:'red'}}>{el}</h1>)}

</>)


};

export default App;
