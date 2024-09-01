import {useState} from 'react';

export default function Square() {
    const [value, setValue] = useState(null)
    //fill the Square component with an X when you click it
    function handleClick() {
        setValue('X')
    }
  
    return (
       <button className="square" onClick={handleClick}>{value}</button>
    )
  }