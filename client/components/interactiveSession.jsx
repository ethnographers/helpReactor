import React from 'react';
import ReactDOM from 'react-dom';
import Whiteboard from './whiteboard.jsx';

const InteractiveSession = (props) => (
  <div className='interactive'>
    <Whiteboard socket={props.socket}/>
  </div>
);

export default InteractiveSession;
