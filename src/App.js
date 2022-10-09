import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor()
  {
    super();
    this.state={
      email:"",
      password:"",
    }
  }
  submit(){
    console.log(this.state);
    fetch('url',{
      method: 'post',
      body:JSON.stringify(
        this.state
      ),
      headers:{
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
      }
    }).then(function(response){
      response.json().then(function(resp){
        console.log(resp)
      })
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Login dfafadfaf</h1>
        <input type="text" onChange={(item)=>this.setState({email:item.target.value})}></input>
        <input type="password" onChange={(item)=>this.setState({password:item.target.value})}></input>

        <button onClick={()=>{this.submit()}}>Login</button>

      </div>
    );
  }
}


export default App;
