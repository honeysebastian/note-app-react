import commonAPI from "./commonAPI"
import SERVER_URL from "./server_url"

// api called by navadd.jsx
export const addNotesAPI=async(notes)=>{
    return await commonAPI('POST',`${SERVER_URL}/allNotes`,notes)
}

// api called by notelist.jsx
export const getNotesAPI=async()=>{
    return await commonAPI('GET',`${SERVER_URL}/allNotes`,'')
}

export const updateNotesAPI=async(noteid,notes)=>{
    return await commonAPI('PUT',`${SERVER_URL}/allNotes/${noteid}`,notes)
}

export const removeNotesAPI=async(noteid)=>{
    return await commonAPI('DELETE',`${SERVER_URL}/allNotes/${noteid}`,{})
}

