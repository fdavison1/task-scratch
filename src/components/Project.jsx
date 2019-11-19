import React from 'react'
import Task from './Task'
import NewTask from './NewTask'

export default class Project extends React.Component {
    constructor() {
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
            newTask: false,
            task: {
                id: 8,
                content: '',
                index: 8
            }
        }
        this.cancelTask = this.cancelTask.bind(this)
        this.doneTask = this.doneTask.bind(this)
        this.taskInput = this.taskInput.bind(this)
    }
    addTask() {
        this.setState({
            newTask: true
        })
    }

    cancelTask() {
        this.setState({
            newTask: false
        })
    }

    doneTask() {
        if (!this.state.task.content) {
            return this.cancelTask()
        }
        this.setState({
            tasks: [...this.state.tasks, this.state.task]
        })
        this.setState({
            task: {
                content: ''
            }
        })
        this.cancelTask()
    }

    taskInput(e) {
        this.setState({
            task: { ...this.state.task, content: e }
        })
    }

    render() {
        const { tasks, newTask } = this.state
        return (
            <div className='project'>
            

            
                    <p>project-1</p>

                    {/* MAP OUT TASKS FOR EACH PROJECT */}
                    {tasks.map(task => (
                        <Task
                            taskObj={task}
                            key={task.content} />
                    ))}


                {newTask && <NewTask
                    cancelTask={this.cancelTask}
                    doneTask={this.doneTask}
                    taskInput={this.taskInput}
                />}
                <br />


                <button
                    onClick={() => this.addTask()}
                >Add task</button>



            </div>
        )
    }
}