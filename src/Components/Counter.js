import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CounterAction } from '../Store/CounterSlice';

export default function Counter() {
  const Counter = useSelector(state => state.cart.counter)
  const Price = useSelector(state => state.cart.price)
  const dispatch = useDispatch();

  const OneInc = () =>{
    // alert("jhhjk")
    dispatch(CounterAction.oneInc({
      inc:1
    }))
  }

  const OneDec =() =>{
    // alert("jhhjk")
    dispatch(CounterAction.oneDec({
      dec:1
    }))
  }

  const TwoInc = () =>{
    // alert("jhhjk")
    dispatch(CounterAction.twoInc({
      inc:2
    }))
  }

  const TwoDec = () => {
    // alert("jhhjk")
    dispatch(CounterAction.twoDec({
      dec:2
    }))
  }

  return (
    <div>
      <h1 className='text-center'>{Counter}</h1>
      <h2 className='text-center'>{Counter*Price}</h2>
      <div className='container d-flex justify-content-between mt-5'>
          <button className='btn btn-primary' type='button' onClick={OneInc}>+1</button>
          <button className='btn btn-primary' type='button' onClick={OneDec}>-1</button>
          <button className='btn btn-primary' type='button' onClick={TwoInc}>+2</button>
          <button className='btn btn-primary' type='button' onClick={TwoDec}>-2</button>
      </div> 
    </div>
  )
}
