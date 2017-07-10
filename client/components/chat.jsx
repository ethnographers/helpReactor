import React from 'react';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      currentMessage: ''
    };
    this.socket = props.socket;
    this.txChat = this.txChat.bind(this);
    this.handleKeys = this.handleKeys.bind(this);
  }

  componentDidMount() {
    this.socket.on('chat', options => this.rxChat(options));
  }

  txChat(message) {
    const messageTuple = [this.props.user.firstName, message];
    this.props.sendP2P({ event: 'chat', message: messageTuple });
    this.setState({
        messages: this.state.messages.concat([messageTuple]),
        currentMessage: ''
    });
  }

  rxChat(options) {
    this.setState({ messages: this.state.messages.concat([options.message]) });
  }
  
  handleKeys(evt) {
    if (evt.key === 'Enter') {
      this.txChat(evt.target.value);
    } else {
      this.setState({ currentMessage: evt.target.value });
    }
  }

  render() {
    return (
      <div>
        <ul id="chat">
        {this.state.messages.map((tuple, index) =>
          (<li className="chatEntry" key={index}>{`${tuple[0]} : ${tuple[1]}`}</li>))}
        </ul>
        <input className="chatInput" type="text" onChange={this.handleKeys} onKeyUp={this.handleKeys} autoComplete="off" value={this.state.currentMessage}/><button className="btn btn-xs btn-default" onClick={this.txChat}>Send</button>
      </div>
    );
  }
}

export default Chat;