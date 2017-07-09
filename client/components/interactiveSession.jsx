import React from 'react';
import ReactDOM from 'react-dom';
import Whiteboard from './whiteboard.jsx';

const InteractiveSession = ({socket, sendP2P}) => (
  <div className='interactive'>
    <Whiteboard socket={socket} sendP2P={sendP2P}/>
  </div>
);

export default InteractiveSession;
