import React, { Component } from 'react';
import logo from './images/todo_logo.jpg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      nimi: []
    }
  }

  componentDidMount() {
      let self = this;
      fetch('/matti', {
        method: 'GET'
      }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            self.setState({nimi: data});
        }).catch(err => {
        console.log('caught it!',err);
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


    return (
      <div>
          <Navbar />
          <div className="App">
            
            <p className="App-intro">
             {this.state.nimi}
            </p>
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;
