import React from 'react'
import moment from 'moment'
const Notification =(props) =>{
    console.log(props.notifications)
    return (
        <div className='section'>
           <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>Notifications</span>
                    <ul className='notification'>
                       {props.notifications && props.notifications.map(note => <li key={note.time}>{note.content} at {moment(note.time.toDate()).calendar()}</li>)}
                    </ul>
                </div>
           </div>
        </div>
    )
}

export default Notification