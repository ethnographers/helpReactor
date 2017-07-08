import React from 'react';
import ReactDOM from 'react-dom';
import TicketEntry from './ticketEntry.jsx';

const TicketList = ({socket, user, ticketList, updateTickets, hasClaimed}) => (
  <div className="ticket_list">
    {ticketList.map((ticket, index) => <TicketEntry socket={socket} user={user} ticket={ticket} updateTickets={updateTickets} hasClaimed={hasClaimed} key={index}/>)}
  </div>
);

export default TicketList;
