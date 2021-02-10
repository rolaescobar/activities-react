import React, {useState}from 'react';
import  PropTypes from 'prop-types';



const CounterApp = ({value = 10}) =>{

    const [counter,setCounter] = useState(value);
    
    //handleAdd
    const handleAdd = (e)=>{
        // setCounter(counter+1);
        setCounter((c)=>c+1);
    }
    const handleSubtrac =(e)=>{
         setCounter((c)=>c-1);
    }
    const handleReset =(e)=>{
        setCounter((c)=>c = value);
   }


   return (
    <>
    <h1>CounterApp</h1>
    <p>{counter}</p>
 <button onClick={handleAdd}>+1</button>
 <button onClick={handleReset}>Reset</button>
 <button onClick={handleSubtrac}>-1</button>

    </>

   );

}

CounterApp.propTypes ={
  value: PropTypes.number.isRequired

}


export default CounterApp;