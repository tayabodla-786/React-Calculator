
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
<>
    <h1 className=' font-bold font-serif text-6xl w-82 flex justify-center h-18  bg-white/20 backdrop-blur-md  placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-amber-300 ml-116 mt-9 rounded-2xl text-black'>Calculator</h1>

    <div className='h-92 w-74 rounded-lg m-0 p-0 text-4xl flex flex-col  justify-center shadow-lg mt-12 ml-120  bg-white/20 backdrop-blur-md text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-amber-300 '>
      
        <input className='w-70 p-3 rounded-2xl ml-2 mb-3 bg-white/20 backdrop-blur-md text-black placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-amber-300 ' type="text"  value={display.replace(/\*/g, "×").replace(/\//g, "÷")} readOnly />
      <div className='flex flex-wrap justify-center gap-1'>
        <button className='w-16 h-16 rounded-full font-serif shadow-2xl shadow-blue-50 transition duration-200 text-black bg-white/20 backdrop-blur-md placeholder-white/70  focus:ring-2 focus:ring-amber-300 text-2xl font-bold hover:bg-amber-300' onClick={() => addValueToDisplay('7')}>7</button>
        <button className='w-16 h-16 rounded-full font-serif shadow-2xl shadow-blue-50 transition duration-200 text-black bg-white/20 backdrop-blur-md placeholder-white/70  focus:ring-2 focus:ring-amber-300 text-2xl font-bold hover:bg-amber-300'  onClick={() => addValueToDisplay('8')}>8</button>
        <button className='w-16 h-16 rounded-full font-serif shadow-2xl shadow-blue-50 transition duration-200 text-black bg-white/20 backdrop-blur-md placeholder-white/70  focus:ring-2 focus:ring-amber-300 text-2xl font-bold hover:bg-amber-300' onClick={() => addValueToDisplay('9')}>9</button>
        <button className='w-16 h-16 rounded-full font-serif shadow-2xl shadow-blue-50 transition duration-200 text-black bg-white/20 backdrop-blur-md placeholder-white/70  focus:ring-2 focus:ring-amber-300 text-2xl font-bold hover:bg-amber-300' onClick={() => addValueToDisplay('*')}>×</button>
        <button className='w-16 h-16 rounded-full font-serif shadow-2xl shadow-blue-50 transition duration-200 text-black bg-white/20 backdrop-blur-md placeholder-white/70  focus:ring-2 focus:ring-amber-300 text-2xl font-bold hover:bg-amber-300' onClick={() => addValueToDisplay('4')}>4</button>
        <button className='w-16 h-16 rounded-full font-serif shadow-2xl shadow-blue-50 transition duration-200 text-black bg-white/20 backdrop-blur-md placeholder-white/70  focus:ring-2 focus:ring-amber-300 text-2xl font-bold hover:bg-amber-300' onClick={() => addValueToDisplay('5')}>5</button>
        <button className='w-16 h-16 rounded-full font-serif shadow-2xl shadow-blue-50 transition duration-200 text-black bg-white/20 backdrop-blur-md placeholder-white/70  focus:ring-2 focus:ring-amber-300 text-2xl font-bold hover:bg-amber-300' onClick={() => addValueToDisplay('6')}>6</button>
        <button className='w-16 h-16 rounded-full font-serif shadow-2xl shadow-blue-50 transition duration-200 text-black bg-white/20 backdrop-blur-md placeholder-white/70  focus:ring-2 focus:ring-amber-300 text-2xl font-bold hover:bg-amber-300' onClick={() => addValueToDisplay('/')}>÷</button>
        <button className='w-16 h-16 rounded-full font-serif shadow-2xl shadow-blue-50 transition duration-200 text-black bg-white/20 backdrop-blur-md placeholder-white/70  focus:ring-2 focus:ring-amber-300 text-2xl font-bold hover:bg-amber-300' onClick={() => addValueToDisplay('1')}>1</button>
        <button className='w-16 h-16 rounded-full font-serif shadow-2xl shadow-blue-50 transition duration-200 text-black bg-white/20 backdrop-blur-md placeholder-white/70  focus:ring-2 focus:ring-amber-300 text-2xl font-bold hover:bg-amber-300' onClick={() => addValueToDisplay('2')}>2</button>
        <button className='w-16 h-16 rounded-full font-serif shadow-2xl shadow-blue-50 transition duration-200 text-black bg-white/20 backdrop-blur-md placeholder-white/70  focus:ring-2 focus:ring-amber-300 text-2xl font-bold hover:bg-amber-300' onClick={() => addValueToDisplay('3')}>3</button>
        <button className='w-16 h-16 rounded-full font-serif shadow-2xl shadow-blue-50 transition duration-200 text-black bg-white/20 backdrop-blur-md placeholder-white/70  focus:ring-2 focus:ring-amber-300 text-2xl font-bold hover:bg-amber-300' onClick={() => addValueToDisplay('-')}>-</button>
        <button className='w-16 h-16 rounded-full font-serif shadow-2xl shadow-blue-50 transition duration-200 text-black bg-amber-300 backdrop-blur-md placeholder-white/70  focus:ring-2 focus:ring-amber-300 text-md font-bold hover:bg-white/20' onClick={clearDisplay}>C</button>
        <button className='w-16 h-16 rounded-full font-serif shadow-2xl shadow-blue-50 transition duration-200 text-black bg-white/20 backdrop-blur-md placeholder-white/70  focus:ring-2 focus:ring-amber-300 text-2xl font-bold hover:bg-amber-300' onClick={() => addValueToDisplay('0')}>0</button>
        <button className='w-16 h-16 rounded-full font-serif shadow-2xl shadow-blue-50 transition duration-200 text-black bg-white/20 backdrop-blur-md placeholder-white/70  focus:ring-2 focus:ring-amber-300 text-2xl font-bold hover:bg-amber-300' onClick={() => addValueToDisplay('+')}>+</button>
        <button className='w-16 h-16 rounded-full font-serif shadow-2xl shadow-blue-50 transition duration-200 text-black bg-white/20 backdrop-blur-md placeholder-white/70  focus:ring-2 focus:ring-amber-300 text-2xl font-bold hover:bg-amber-300' onClick={calculate}>=</button>
      </div>
    </div>
    </>
  )
}

export default Calculator
