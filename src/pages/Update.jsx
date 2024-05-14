import React from 'react'
import { Link } from 'react-router-dom'

function Update() {
  return (
    <div>
        <div style={{width:'500px',height:'500px',marginTop:'5rem'}} className="container bg-light p-5 border rounded shadow text-center d-flex flex-column">
            <h2 className='mt-2 mb-5'>Notes</h2>
            <textarea type="text" className='form-control mb-5' rows="3" />
            <button className='btn btn-success mb-3'>Update</button>
            <Link to={'/'}><button className='btn btn-warning w-100'>Back</button></Link>
        </div>
    </div>
  )
}

export default Update