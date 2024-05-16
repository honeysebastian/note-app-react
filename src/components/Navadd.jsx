import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { addNotesAPI } from '../services/allAPI';


function Navadd({setAddNoteResponse}) {
  const [note, setNote] = useState({
    notes: ""
  })
  console.log(note);

  const handleAdd = async () => {
    console.log("inside handleAdd function");
    const { notes } = note
    if (notes) {
      console.log("API call");
      try {
        const result = await addNotesAPI(note)
        if (result.status >= 200 && result.status < 300) {
          console.log(result.data);
          setAddNoteResponse(result.data)
          toast.success(`note added to your list`)
          setNote({ notes: "" })

        } else {
          toast.error(result.response.data)
        }
      } catch (err) {
        console.log(err);
      }

    } else {
      toast.error("Please fill the form completely!")

    }

  }
  return (
    <div>
      {/* <h1 style={{color:'white',fontSize:'60px'}} className='text-center'>Note App</h1> */}
      <div style={{ height: '90px'}} className="w-100 d-flex justify-content-center align-items-center bg-warning p-5">
        <input onChange={e => setNote({ notes: e.target.value })} type="text" className='form-control w-25 me-4' rows="2" placeholder="Enter your note" />
        <button onClick={handleAdd} className='btn btn-light text-danger'>Add Note</button>
      </div>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </div>
  )
}

export default Navadd