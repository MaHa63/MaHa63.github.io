import React, { Component } from 'react';
import logo from './images/todo_logo.jpg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
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
              <li className="active"><a href="#">Tasks</a></li>
              <li className="active"><a href="#">Users</a></li>
            </ul>

            <ul className="nav navbar-nav navbar-right"> 
              <li><a href="#">Login</a></li>
            </ul>
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


    let todos = this.state.todos;
    return (
      
      <div>
          <Navbar />

          <div className="App">

            <div className="container">
              <h1>List of activities</h1>
              <table className=" table table-striped">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Owner</th>
                  </tr> 
                </thead>
                <tbody>
                  {todos.map((todo) => <tr><td key={todo.id}>{todo.name}</td><td>{todo.owner}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
          <Footer />
          </div>
    );
  }
}

export default App;
