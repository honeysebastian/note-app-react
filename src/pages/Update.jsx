import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {updateNotesAPI } from '../services/allAPI';
import { toast } from 'react-toastify';

function Update({editNote}) {

  const [note,setNote]=useState(editNote.notes)

  const{id}=editNote
  console.log(id);

  const handleChange=async(e)=>{
    setNote(e.target.value);


  }

  const handleUpdateChange= async(id,note)=>{

    console.log(`Updates note id is ${id} and note ${note}`);
    try{
      await updateNotesAPI(id,note)
      toast.warning("Note updated successfully")
    }catch(err){
      console.log(err);
    }
   

  }
  return (
    
    <div>
        <div style={{width:'500px',height:'500px',marginTop:'5rem'}} className="container bg-light p-5 border rounded shadow text-center d-flex flex-column">
            <h2 className='mt-2 mb-5'>Notes</h2>
            
              <textarea type="text" value={note} onChange={e=>handleChange(e)} className='form-control mb-5' rows="3" />
              
            <button onClick={()=>handleUpdateChange(id,note)} className='btn btn-success mb-3'>Update</button>
            <Link to={'/'}><button className='btn btn-warning w-100'>Back</button></Link>
        </div>
    </div>
  )
}

export default Update