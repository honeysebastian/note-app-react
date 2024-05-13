import React from 'react'
import { Link } from 'react-router-dom'

function Notelist() {
  return (
    <div>
       <div className='container mt-5'>
            <table className="table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Note</th>
                        <th>Time</th>
                        <th>Edit note</th>
                        <th>Delete note</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>hello my name is honey</td>
                        <td>10:45</td>
                        <td><Link to={'/update'}><button className='btn btn-success'>Edit</button></Link></td>
                        <td><button className='btn btn-danger'>Delete</button></td>
    
                    </tr>
                </tbody>
    
            </table>
       </div>
    </div>
  )
}

export default Notelist