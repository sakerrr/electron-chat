import React, { Component } from 'react'

class TypingIndicator extends Component {
    render(){
        if(this.props.usersWhoAreTyping.length > 0){
            return (
                <div className="typingIndicator">
                     {`${this.props.usersWhoAreTyping.slice(0, 2).join(' and ')} is typing`}

                     <span className="loader__dot">.</span><span className="loader__dot">.</span><span className="loader__dot">.</span>
                </div>
            )
        }
        return <div/>
    }
}

export default TypingIndicator