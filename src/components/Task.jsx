import React from 'react'

export default class Task extends React.Component{
    render(){
        const {taskObj} = this.props
        return(


            <div className='task'>
                
                
            
                <p>{taskObj.content}</p>
               
                
                
                </div>

        )
    }
}