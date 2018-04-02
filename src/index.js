import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TaskItem from './taskItem.js';
import TaskList from './taskList.js';
import NewTask from './newTask.js';
import './styles.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
       complete:"Valmis",
       remove:"Poista",
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
      ],
      doneItems:[
        {
          id:"10",
          name:"Jones",
          task:"Tiskaa"
        },
        {id:"11",
        name:"Niesyrkela",
        task:"Hupene"
        }
      ]
    };
  };

  render(){
    return(
      <div>
        <h4 className="tekematta">Tekemättömät </h4>
          <TaskList items={this.state.items} />
          <NewTask />
          <br /> <br />
          <h4 className="tehty">Tehdyt </h4>
          <TaskList items={this.state.doneItems} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
