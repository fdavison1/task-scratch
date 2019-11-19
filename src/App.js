import React from 'react';
import './App.css';
import Project from './components/Project'
import { DragDropContext } from 'react-beautiful-dnd'


class App extends React.Component {
  state = {}



  onDragEnd(){
    return console.log('fred')
  }

  render() {

    return (

      <DragDropContext onDragEnd={this.onDragEnd} >
      <div className="App">



          hello, world
    <Project />

        </div>
      </DragDropContext>

    );
  }
}

export default App;
