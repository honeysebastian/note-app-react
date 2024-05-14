import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';


function Navadd() {
  const [note, setNote] = useState({
    notes:""
  })
  console.log(note);

  const handleAdd = () => {
    console.log("inside handleAdd function");
    const {notes}=note
    if(notes){
      console.log("API call");

    }else{
      toast.error("Please fill the form completely!")

    }

  }
  return (
    <div>
      <div style={{ height: '90px' }} className="w-100 d-flex justify-content-center align-items-center bg-warning">
        <input onChange={e=>setNote({notes:e.target.value})} type="text" className='form-control w-25 me-4' rows="2" />
        <button onClick={handleAdd} className='btn btn-light text-danger'>Add Note</button>
      </div>
      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
    </div>
  )
}

export default Navadd