import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      teamNames: []
    }
    this.addNewTeam = this.addNewTeam.bind(this)
  }
  addNewTeam(teamName) {
    this.state.teamNames.push(teamName)
    this.setState({
      teamName: this.state.teamNames
    })
  }  //PROP: invoke to tell parent

  render() {
    return (
      <div className="App">
        <AddTeam add={this.addNewTeam} />
        <TeamNames teamNames={this.state.teamNames} />
      </div>
    );
  }
}

export default App;

class AddTeam extends Component {
  state = {
    newTeamName: '',
  }
  updateTeamName(e) {
    this.setState({
      newTeamName: e.target.value,
    })
  }

  sendNewTeam = () => {
    this.props.add(this.state.newTeamName)
    this.setState({
      newTeamName: ''
    })
  }

  handleKeyDown = e =>{
    if(e.keyCode === 13){
      this.sendNewTeam()
    }
  }
  render() {
    return (
      <div>
        <input onChange={e => this.updateTeamName(e)} 
        onKeyDown = {e => this.handleKeyDown(e)}/>
        <button onClick={this.sendNewTeam}>
          Add
        </button>
      </div>
    )
  }
}

function TeamNames(props) {
  const teamNames = props.teamNames
  return (
    <div>
      {teamNames.map((name, i) => (
        <li key={i}>{name}</li>
      ))}
    </div>
  )
}