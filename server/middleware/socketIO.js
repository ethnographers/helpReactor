const { db, Ticket, User } = require('../../database/');
const util = require('../../helpers/util');

var updateUserOnlineStatus = (id, status) => {
  User.update(
    {online: status},
    { where: { id: id } }
  ).catch((err) => {
    console.log('ERROR: unable to update user ', id, ' online status to : ', status); 
  });
};

module.exports = server => {
  const io = require('socket.io')(server, { cookie: true });

  const students = {};
  const mentors = {};
  const admins = {};

  io.on('connection', socket => {
    let id = socket.handshake.query.id;
    let role = socket.handshake.query.role;

    updateUserOnlineStatus(id, true);
    
    if (role === 'student') {
      !students[id] ? students[id] = [socket] : students[id].push(socket);
    } else if (role === 'mentor') {
      !mentors[id] ? mentors[id] = [socket] : mentors[id].push(socket);
    } else if (role === 'admin') {
      !admins[id] ? admins[id] = [socket] : admins[id].push(socket);
    }

    io.emit('user connect', util.connectionCount(students, mentors, admins));

    console.log(`${Object.keys(students).length} students connected`);
    console.log(`${Object.keys(mentors).length} mentors connected`);
    console.log(`${Object.keys(admins).length} admins connected`);

    socket.on('refresh', () => io.emit('update or submit ticket'));

    socket.on('get wait time', () => {
      Ticket.findAll().then(tickets => {
        let response = { waitTime: util.computeAvgWaitTime(tickets, mentors, id) };
        console.log('this is the response est wait time!: ', response);
        socket.emit('new wait time', response);
      });
    });

    socket.on('update adminStats', () => {
      let openedTickets = closedTickets = 0;
      Ticket.count({ where: { status: 'Opened' } })
        .then(numOpenTickets => {
          openedTickets = numOpenTickets;
          return Ticket.count({
            where: {
              status: 'Closed',
              closedAt: { $gt: new Date(new Date() - 24 * 60 * 60 * 1000) }
            }
          });
        })
        .then(numCloseTickets => {
          closedTickets = numCloseTickets;
          io.emit('new adminStats', {
            open: openedTickets,
            closed: closedTickets
          });
        });
    });

    socket.on('p2p', (options) => {
      console.log(
        `server got p2p:${options.event} from:${options.from} to:${options.to} for ${options.event}`
      );
      const sockets = (options.to.role == 'student') ?
            students[options.to.id] : mentors[options.to.id];
      sockets.forEach(socket => socket.emit(options.event, options));

    });

    // logic has flaws
    // socket.on('update adminStats', () => {
    //   Ticket.findAll({ where: { createdAt: { $gt: new Date(new Date() - 24 * 60 * 60 * 1000) } } })
    //     .then(result => {
    //       io.emit('new adminStats', util.getAdminStats(result));
    //     });
    // });

    socket.on('disconnect', socket => {

      updateUserOnlineStatus(id, false);

      if (role === 'student') {
        students[id].length <= 1 ? delete students[id] : students[id].splice(students[id].indexOf(socket), 1);
      } else if (role === 'mentor') {
        mentors[id].length <= 1 ? delete mentors[id] : mentors[id].splice(mentors[id].indexOf(socket), 1);
      } else if (role === 'admin') {
        admins[id].length <= 1 ? delete admins[id] : admins[id].splice(admins[id].indexOf(socket), 1);
      }

      io.emit('user disconnect', util.connectionCount(students, mentors, admins));

      console.log(`Disconnected, now ${Object.keys(students).length} students connected`);
      console.log(`Disconnected, now ${Object.keys(mentors).length} mentors connected`);
      console.log(`Disconnected, now ${Object.keys(admins).length} admins connected`);
    });

  });
 }

