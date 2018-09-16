import React, { Component } from 'react'
import Moment from 'react-moment';

class MessagesList extends Component {
    render() {
         const styles = {
               container: {
                 overflowY: 'scroll',
                 flex: 1,
               },
               ul: {
                 listStyle: 'none',
               },
               li: {
                 marginTop: 15,
                 marginBottom: 15,
               },
               senderUsername: {
                 fontWeight: 'bold',
               },
               message: { fontSize: 13 },
             }
             return (
               <div
                 style={{
                   ...this.props.style,
                   ...styles.container,
                 }}
               >
                 <ul style={styles.ul} className="messages">
                   {this.props.messages.map((message, index) => (
                     <li key={index} style={styles.li} className="message">
                       <div className="user">
                        <span className="userAvatar"></span>
                         <span className="userName" style={styles.senderUsername}>{message.senderId} 
                         <Moment format="YYYY/MM/DD hh:mm" className="timestamp">
                            {message.createdAt}
                         </Moment> 
                         </span>{' '}
                       </div>
                       <p className="messageText" style={styles.message}>{message.text}</p>
                     </li>
                   ))}
                 </ul>
               </div>
        )
    }
}

export default MessagesList