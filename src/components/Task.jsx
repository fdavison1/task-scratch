import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export default class Task extends React.Component{
    render(){
        const {taskObj} = this.props
        return(
            <Draggable>

            <div className='task'>
                
                
            
                <p>{taskObj.content}</p>
               
                
                
                </div>
            </Draggable>
        )
    }
}