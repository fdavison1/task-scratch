import React from 'react'
import Task from './Task'
import NewTask from './NewTask'

export default class Project extends React.Component{
    constructor(){
        super()

    this.state = {
        tasks: [{
                id: 1,
                content: 'task-1',
                index: 1
            },
            {
                id: 2,
                content: 'task-2',
                index: 2
            }],
        newTask: false
    }
    this.cancelTask = this.cancelTask.bind(this)
    this.doneTask = this.doneTask.bind(this)
}
    addTask(){
        this.setState({
            newTask: true
        })
    }

    cancelTask(){
        this.setState({
            newTask: false
        })
    }

    doneTask(){
        this.state.tasks.push(
            {
            id: 1,
            content: 'task-1',
            index: 1
        }
        )
        this.setState({
            tasks: this.state.tasks
        })
        this.cancelTask()
    }

    render(){
        const {tasks, newTask} =this.state
        return(
            <div className='project'>
                
                
                
                
                <p>project-1</p>
                {/* MAP OUT TASKS FOR EACH PROJECT */}
                {tasks.map(task => (
                    <Task 
                    taskObj = {task}
                    key={task.content}/>
                ))}
                
                {newTask && <NewTask 
                cancelTask = {this.cancelTask}
                doneTask = {this.doneTask}
                />}
                <br/>


                <button
                onClick={() => this.addTask()}
                >Add task</button>
                
                
                
                </div>
        )
    }
}