import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TaskItem from './taskItem.js';
import TaskList from './taskList.js';
import './styles.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      items:[
        {
          id:"1",
          name: "Marko",
          task: "Juo olut kun tämä toimii"
        },
        {
          id:"2",
          name: "Spede",
          task: "Voi rähmä"
        },
        {
          id:"3",
          name:"Loiro",
          task:"Kaatuile hassusti"
        }
      ]
    };
    console.log("state", this.state);
  };

  render(){
    return(
      <div>
        <h4 className="moro">Tehtävälista </h4>
          <TaskList items={this.state.items} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
