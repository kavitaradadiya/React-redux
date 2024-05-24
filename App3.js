import React, { useState } from 'react'
import data from './Data'

export default function App3() {
    const [input , setInput] = useState({})
    const [result , setResult] = useState(data)
    const [ind_state, setInd_state] = useState(0)

    const input_handler = (e) =>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    console.log(input)

    const submit_handler = () => {
      setResult([...result,input])
  }

    const delete_handler = (index) =>{
        result.splice(index,1)
        setInput([...result])
    }

    const show_data = (obj_,ind_) =>{
        setInput(obj_)
        setInd_state(ind_)
    }

    const update_data = (ind_) =>{
      result.splice(ind_,1,input)
      setResult([...result])
    }

  return (
    <>
      <div className='mt-2'>
        <label>Book:</label>
        <input placeholder='Book name' value={input.title} name='title' onChange={input_handler}></input>
        <label>Author Name:</label>
        <input placeholder='Book name' value={input.author} name='author' onChange={input_handler}></input>
        <button className='btn btn-primary ms-2'onClick={submit_handler}>Add to data</button>
        <button className='btn btn-primary ms-2' onClick={() => {update_data(ind_state)}}>update data</button>

      </div>

      {
            result?.map((val_,index)=>{
                return (
                <>
                <h5>{val_.title}</h5>
                <h5>{val_.author}</h5>
                <button className='btn btn-success me-2' onClick={()=>{delete_handler(index)}}>Delete</button>
                <button className='btn btn-success' onClick={()=>{show_data(val_,index)}}>View</button>
                </>
                )
            })
        }
    </>
  )
}
