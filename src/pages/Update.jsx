import React from 'react'

function Update() {
  return (
    <div>
        <div style={{width:'500px',height:'500px',marginTop:'5rem'}} className="container bg-light p-5 border rounded shadow text-center d-flex flex-column">
            <h2 className='mt-2 mb-5'>Notes</h2>
            <textarea type="text" className='form-control mb-5' rows="3" />
            <button className='btn btn-success mb-3'>Update</button>
            <button className='btn btn-warning'>Back</button>
        </div>
    </div>
  )
}

export default Update