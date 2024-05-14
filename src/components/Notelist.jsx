import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getNotesAPI, removeNotesAPI } from '../services/allAPI'

function Notelist({addNoteResponse,setEditNote}) {
    const[allNotes,setAllVideos]=useState([])


    useEffect(()=>{
        getallNotes()
    },[addNoteResponse])

    const getallNotes=async()=>{

        const result=await getNotesAPI()
        setAllVideos(result.data)

    }

    const handleUpdateNote=(item)=>{
        console.log(item);
        setEditNote(item)

    }

    const handleRemoveNote= async(noteid)=>{
       try{
        const result= await removeNotesAPI(noteid)
        getallNotes()

       }catch(err){
        console.log(err);
       }

    }



  return (
    <div>
       <div className='container mt-5'>
            <table className="table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Note</th>
                        <th>Edit note</th>
                        <th>Delete note</th>
                    </tr>
                </thead>
                <tbody>
                  {  allNotes?.length>0?allNotes?.map((item,index)=>(
                      <tr key={item?.id}>
                      <td>{index+1}</td>
                      <td>{item?.notes}</td>
                      <td><Link to={'/update'}><button onClick={()=>handleUpdateNote(item)} className='btn btn-success'>Edit</button></Link></td>
                      <td><button onClick={()=>handleRemoveNote(item?.id)} className='btn btn-danger'>Delete</button></td>
  
                  </tr>

                  ))
                  :
                  <div className='text-danger fw-bolder'>You have no notes!!</div>

                }
                </tbody>
    
            </table>
       </div>
    </div>
  )
}

export default Notelist