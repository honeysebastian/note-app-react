import React, { useState } from 'react'
import Navadd from '../components/Navadd'
import Notelist from '../components/Notelist'

function Home({setEditNote}) {
  const[addNoteResponse,setAddNoteResponse]=useState('')
  return (
    <div>
        <Navadd setAddNoteResponse={setAddNoteResponse}/>
        <Notelist addNoteResponse={addNoteResponse} setEditNote={setEditNote} />
    </div>
  )
}

export default Home