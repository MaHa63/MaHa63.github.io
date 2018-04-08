import React, { Component } from 'react';
import logo from './images/todo_logo.jpg';
import './App.css';

//import Calendar from 'react-input-calendar';


class App extends Component {

  constructor(props){
    super(props)
    this.addTodo = this.addTodo.bind(this);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
      console.log('Mount operation');
      var that = this;
      fetch('list',{method: 'GET'})
        .then(function(response){
          response.json()
          .then(function(data){
            console.log(data);
            that.setState({
              todos: data
             })
          })
        })
  }



  removeTodo(id) {
    console.log(this);
    var that = this;
    let todos = this.state.todos;
    let todo = todos.find(function(todo) {
      return todo.id === id 
    });

    console.log(todo);

    var request = new Request('/delete/' + id, {
      method: 'DELETE',
      headers: new Headers({'Content-Type': 'application/json'})
    });

    fetch (request)
      .then(function(response) {
          //todos.splice(todo, 1);
          //that.setState({
          //   todos: todos
          //})
          response.json()
            .then(function(data) {
              console.log(data);
            })
      })

      // New listing after DB transaction

      
    setTimeout(function(){for(var i = 0 ; i < 100000; i++);},1000);
    fetch('list',{method: 'GET'})
        .then(function(response){
          response.json()
          .then(function(data){
            console.log(data);
            that.setState({
              todos: data
             })
          })
        })
    
    
  

    this.refs.todoForm.reset();

  }
 
  listTodo() {
    setTimeout(function(){for(var i = 0 ; i < 100000; i++);},1000);
    fetch('list',{method: 'GET'})
        .then(function(response){
          response.json()
          .then(function(data){
            console.log(data);
            this.setState({
              todos: data
             })
          })
        })
  }

  addTodo(event) {
    event.preventDefault();
    //console.log(this.refs);

    //let name = this.refs.name.value;
    //let owner = this.refs.owner.value;
    var that = this;

    let data = {
      name: this.refs.name.value,
      owner: this.refs.owner.value,
      schedule: this.refs.schedule.value
    };

    console.log(data);
    console.log("----lähetettävä data----");

    var request = new Request('/insert', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(data)  
    });

    fetch(request)
      .then(function(response) {
        response.json()
          .then(function(data) {
            console.log(data);           
          })
      })
    
    
    // New listing after DB transaction
    
    setTimeout(function(){for(var i = 0 ; i < 100000; i++);},1000);
    fetch('list',{method: 'GET'})
        .then(function(response){
          response.json()
          .then(function(data){
            console.log(data);
            that.setState({
              todos: data
             })
          })
        })
    

    this.refs.todoForm.reset();
  }
    

  render() {
    function Navbar() {
      return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
            <div className="navbar-header">
               <a className="navbar-brand" href="">
                <img src={logo} width={35} alt="" />
              </a>
            </div>
            
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Main</a></li>
              {/* <li className="active"><a href="#">Tasks</a></li> */}
              {/* <li className="active"><a href="#">Users</a></li> */}
            </ul>

            
            {/* <ul className="nav navbar-nav navbar-right"> */} 
            {/*  <li><a href="#">Login</a></li> */}
            {/* </ul> */}
            

            </div>
        </nav> 
      );
    }

    function Footer() {
      return (
        <div className="footer">
          <p>Powered by React</p>
        </div>
      );
    }

    function CompareDates(date) {
      let curDate = new Date();
      let compDate = new Date(date);
      console.log('curDate=',curDate.toLocaleDateString());
      console.log('compDate=',compDate.toLocaleDateString());
      if (compDate > curDate ) {
          console.log('black');
          return ('black');
      }
     console.log('red');
     return ('red');
    
    }

  
    function ShowTasks() {
     
    }

    let todos = this.state.todos;
    let curDate = new Date();

    return (
      
      <div>
          <Navbar />

          <div className="App">

            <div className="container">
              <h1>Task Lists</h1>
              <table className=" table table-striped">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Owner</th>
                    <th>Deadline</th>
                    <th>Action</th>
                  </tr> 
                </thead>
                  <tbody>
                  {todos.map((todo) => <tr className={CompareDates(todo.schedule)}><td key={todo.id}>{todo.name}</td><td>{todo.owner}</td><td>{(new Date(todo.schedule)).toLocaleDateString()}</td> <td><button onClick={this.removeTodo.bind(this, todo.id)}>Done</button> </td></tr>)}
                  </tbody>
              </table>
            </div>
            <br/><br/><br/><br/>

            <form className="form-inline text-center"  ref="todoForm" action="/action_page.php">
            <h4>Fill Task, Responsible and Schedule: </h4>
              <div className="form-group">
                <label for="name">Description:</label>
                <input type="text" ref="name" placeholder="Description" />
              </div>
              
              <div className="form-group">
                <label for="owner">Owner:</label>
                <input type="text" ref="owner" placeholder="Owner" />
              </div>

              <div className="form-group">
                <label for="schedule">Schedule:</label>
                <input type="date" ref="schedule" placeholder="Schedule" />
              </div>

              <button onClick={this.addTodo}>Submit Task </button>
              <br/><br/><br/><br/>
            </form>


          </div>
          <Footer />
          </div>
    );
  }
}

export default App;
