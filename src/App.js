import React, { Component } from 'react'
import UsernameForm from './components/usernameForm'
import ChatScreen from './components/chatScreen'

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUsername: '',
      currentScreen: 'WhatIsYourUsernameScreen'
    }
    this.onUsernameSubmit = this.onUsernameSubmit.bind(this);
  }

  onUsernameSubmit(username) {
    fetch('//'+ window.location.hostname + ':3001/users',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify({ username })
    })
    .then(response => {
      this.setState({
        currentUsername: username,
        currentScreen: 'ChatScreen'
      })
    })
    .catch(error => console.log('error',error))
  }

  render() {
    if(this.state.currentScreen === 'WhatIsYourUsernameScreen'){
      return <UsernameForm onSubmit={this.onUsernameSubmit}/>
    }
    if(this.state.currentScreen === 'ChatScreen'){
      return <ChatScreen currentUsername={this.state.currentUsername} />
    }
  }
}

export default App
