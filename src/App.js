import React from 'react';
import './App.css';
import Project from './components/Project'


class App extends React.Component {
  state = {}



  onDragEnd(){
    return console.log('fred')
  }

  render() {

    return (


      <div className="App">



          hello, world
    <Project />

        </div>


    );
  }
}

export default App;
