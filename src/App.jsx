
import { useState } from 'react'
import './App.css'

function Calculator () {

  const [display, setdisplay] = useState("0");

  const addValueToDisplay = (value) => {
    if(display === "0"){
      setdisplay(value);
    }else{
      setdisplay(display + value);
    }
  }

  const clearDisplay = () =>{
    setdisplay("0")
  }

  const calculate = () => {
    setdisplay(eval(display).toString());

  }

  return (


    <div className='h-130 w-120 text-4xl flex flex-col justify-center items-center bg-amber-300  '>
      
        <input className='w-90 h-20 mb-1.5 pl-2 text-4x2 rounded-3xl bg-amber-950 ' type="text"  value={display.replace(/\*/g, "×").replace(/\//g, "÷")} readOnly />
      <div className='w-90 h-90 flex flex-wrap justify-center rounded-3xl bg-amber-50 p-0'>
        <button className='text-4xl m-0.5 w-20 h-20 rounded-full bg-amber-200' onClick={() => addValueToDisplay('7')}>7</button>
        <button className='text-4xl m-0.5 w-20 h-20 rounded-full bg-amber-200'  onClick={() => addValueToDisplay('8')}>8</button>
        <button className='text-4xl m-0.5 w-20 h-20 rounded-full bg-amber-200' onClick={() => addValueToDisplay('9')}>9</button>
        <button className='text-4xl m-0.5 w-20 h-20 rounded-full bg-amber-200' onClick={() => addValueToDisplay('*')}>×</button>
        <button className='text-4xl m-0.5 w-20 h-20 rounded-full bg-amber-200' onClick={() => addValueToDisplay('4')}>4</button>
        <button className='text-4xl m-0.5 w-20 h-20 rounded-full bg-amber-200' onClick={() => addValueToDisplay('5')}>5</button>
        <button className='text-4xl m-0.5 w-20 h-20 rounded-full bg-amber-200' onClick={() => addValueToDisplay('6')}>6</button>
        <button className='text-4xl m-0.5 w-20 h-20 rounded-full bg-amber-200' onClick={() => addValueToDisplay('/')}>÷</button>
        <button className='text-4xl m-0.5 w-20 h-20 rounded-full bg-amber-200' onClick={() => addValueToDisplay('1')}>1</button>
        <button className='text-4xl m-0.5 w-20 h-20 rounded-full bg-amber-200' onClick={() => addValueToDisplay('2')}>2</button>
        <button className='text-4xl m-0.5 w-20 h-20 rounded-full bg-amber-200' onClick={() => addValueToDisplay('3')}>3</button>
        <button className='text-4xl m-0.5 w-20 h-20 rounded-full bg-amber-200' onClick={() => addValueToDisplay('-')}>-</button>
        <button className='text-4xl m-0.5 w-20 h-20 rounded-full bg-amber-200' onClick={clearDisplay}>C</button>
        <button className='text-4xl m-0.5 w-20 h-20 rounded-full bg-amber-200' onClick={() => addValueToDisplay('0')}>0</button>
        <button className='text-4xl m-0.5 w-20 h-20 rounded-full bg-amber-200' onClick={() => addValueToDisplay('+')}>+</button>
        <button className='text-4xl m-0.5 w-20 h-20 rounded-full bg-amber-200' onClick={calculate}>=</button>
      </div>
    </div>
    
  )
}

export default Calculator
