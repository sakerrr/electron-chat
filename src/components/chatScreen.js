import React, { Component } from 'react'
import Chatkit from '@pusher/chatkit'
import MessagesList from './messagesList'
import SendMessageForm from './sendMessageForm'
import TypingIndicator from './typingIndicator'
import WhosOnlineList from './whoIsOnlineList'

class ChatScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentUser: {},
            currentRoom: {},
            messages: [],
            usersWhoAreTyping: []
        }
        this.sendMessage = this.sendMessage.bind(this)
        this.sendTypingEvent = this.sendTypingEvent.bind(this)
    }
    sendTypingEvent(){
        this.state.currentUser
        .isTypingIn({roomId: this.state.currentRoom.id})
        .catch(error => console.log(error))
    }
    sendMessage(text) {
        this.state.currentUser.sendMessage({
            text,
            roomId: this.state.currentRoom.id
        })
        console.log('message');
    }
    componentDidMount () {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: 'v1:us1:20fceb5f-367b-4a71-a1d6-189eba10caf5',
            userId: this.props.currentUsername,
            //TODO: remove testing token provider
            tokenProvider: new Chatkit.TokenProvider({
                url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/20fceb5f-367b-4a71-a1d6-189eba10caf5/token'
            }),
        })

        chatManager.connect().then(currentUser => {
            this.setState({currentUser})
            return currentUser.subscribeToRoom({
                roomId: 13291423, // default general room
                messagesLimit: 100,
                hooks: {
                    onNewMessage: message => {
                        this.setState({
                            messages: [...this.state.messages, message],
                        })
                    },
                    onUserStartedTyping: user => {
                        this.setState({
                            usersWhoAreTyping: [...this.state.usersWhoAreTyping, user.name]
                        })
                        console.log(this.state.usersWhoAreTyping);
                    },
                    onUserStoppedTyping: user => {
                        this.setState({
                            usersWhoAreTyping: this.state.usersWhoAreTyping.filter(username => username !== user.name)
                        })
                    },
                    onUserCameOnline: () => this.forceUpdate(),
                    onUserWentOffline: () => this.forceUpdate(),
                    onUserJoined: () => this.forceUpdate(),
                }
            })
        })
        .then(currentRoom => {this.setState({currentRoom})})
        .catch(error => console.log(error))
    }
    render () {
        const styles = {
            container: {
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
            },
            chatContainer: {
                display: 'flex',
                flex: 1,
            },
            whosOnlineListContainer: {
                width: '25%',
                maxWidth: '300px',
                flex: 'none',
                padding: 20,
                backgroundColor: '#2c303b',
                color: 'white',
            },
            chatListContainer: {
                padding: 20,
                width: '85%',
                display: 'flex',
                flexDirection: 'column',
            },
            }
        
            return (
                <div style={styles.container}>
                <div style={styles.chatContainer}>
                    <aside style={styles.whosOnlineListContainer}>
                    <WhosOnlineList
                        currentUser={this.state.currentUser}
                        users={this.state.currentRoom.users}
                    />                    
                    </aside>
                    <section style={styles.chatListContainer}>
                    <MessagesList messages={this.state.messages} style={styles.chatList}/>     
                    <TypingIndicator usersWhoAreTyping={this.state.usersWhoAreTyping} />
                    <SendMessageForm 
                        onSubmit={this.sendMessage}
                        onChange={this.sendTypingEvent}
                    />
                    </section>
                </div>
                </div>
            )
    }
}

export default ChatScreen