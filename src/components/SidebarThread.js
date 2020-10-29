import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SidebarThread.css"
const SidebarThread = () => {
    return (
        <div className="sidebarThread">
        <Avatar/>
        <div className="sidebarThread__details">
           <h3>Thread Name</h3> 
           <p>Message info</p>
           <small className="sidebarThread__timeStamp">Time Stamp</small>
           </div>
        </div>
    )
}

export default SidebarThread
