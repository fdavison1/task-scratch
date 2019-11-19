import React from 'react'
import Task from './Task'

export default class Project extends React.Component{
    state = {
        tasks: [{
                id: 1,
                content: 'task-1',
                index: 1
            },
            {
                id: 2,
                content: 'task-2',
                index: 2
            }]
        
    }
    render(){
        const {tasks} =this.state
        return(
            <div className='project'>
                
                
                
                
                <h1>Project-1</h1>
                {/* MAP OUT TASKS FOR EACH PROJECT */}
                {tasks.map(task => (
                    <Task 
                    taskObj = {task}
                    key={task.content}/>
                ))}
                
                
                <button>Add task</button>
                
                
                
                </div>
        )
    }
}