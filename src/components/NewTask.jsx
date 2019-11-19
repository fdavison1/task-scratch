import React from 'react'

export default function NewTask  (props)  {
    return (
        <div className='task'>

            <input type="text"/>

            <button
            onClick={()=> props.doneTask()}
            >done</button>
            <button
            onClick={()=>props.cancelTask()}
            >cancel</button>

        </div>
    )
}