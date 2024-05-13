import React, { useState } from 'react'

function Navadd() {
  const [note, setNote] = useState('')

  const handleAdd = () => {
    console.log("inside handleAdd function");

  }
  return (
    <div>
      <div style={{ height: '90px' }} className="w-100 d-flex justify-content-center align-items-center bg-warning">
        <input type="text" className='form-control w-25 me-4' rows="2" />
        <button onClick={handleAdd} className='btn btn-light text-danger'>Add Note</button>
      </div>
    </div>
  )
}

export default Navadd