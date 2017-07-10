'use strict';

var reducedToDay = function (date) {
  return date % 604800000 < 86400000;
};

var displayAlert = function (message, type) {
  document.querySelector('#alert_main').className = 'alert alert-main alert-' + type;
  document.querySelector('#alert_main').textContent = message;
  document.querySelector('#alert_main').style.top = '0';
  setTimeout(function () {
    document.querySelector('#alert_main').style.top = '-36px';
  }, 3000);
};

var connectionCount = function connectionCount(students, mentors, admins) {
  var res = {
    student: Object.keys(students).length,
    mentor: Object.keys(mentors).length,
    admin: Object.keys(admins).length
  };
  return res;
}; 

var findQueuePos = function(tickets, userId) {
  return tickets.filter(function (ticket) {
    return ticket.status === 'Opened';
  }).sort(function (ticket1, ticket2) {
    return Date.parse(ticket1.createdAt) - Date.parse(ticket2.createdAt);
  }).findIndex(function (ticket) {
    return ticket.userId === userId;
  }) + 1;
};

var computeSimpleWaitAverage = function(tickets, storage) {
  return tickets.reduce(function (acc, curr) {
    var date = Date.parse(curr.claimedAt);
    var wait = date - Date.parse(curr.createdAt);
    if (reducedToDay(date) && curr.claimedAt) {
      storage.push(curr);
      return acc + wait;
    }
    return acc;
  }, 0);
};

var getEstimate = function(excessMentors, queuePos, estimatedInterval) {
  var estimate = 0;
  var countAvail = excessMentors
  if(queuePos === 0) { 
    queuePos = tickets.filter(function (ticket) {return ticket.claimedAt && !ticket.closedAt}).length;
  } else if (queuePos >= 0) {
    for (var i = 0; i < queuePos; i++) {
      if (i + 1 < countAvail && countAvail) {
        estimate += estimatedInterval / Math.pow(excessMentors, 2);
      } else {
        estimate += estimatedInterval / excessMentors;
      }
    }
    return estimate;
  }
};

var computeAvgWaitTime = function (tickets, mentors, userId) {
  var storage = [];
  var sum = computeSimpleWaitAverage(tickets, storage);
  var queuePos = findQueuePos(tickets, userId);
  var openTickets = tickets.filter(function (ticket) {return ticket.status == 'Opened'});
  if (queuePos === 0) {queuePos = openTickets.length + 1};
  // keep this line for realtime data and delete line 21 with the hard code:
  // let excessMentors = mentors - quantityClaimedAndUnclosed;
  var excessMentors = 2;
  var estimatedInterval = new Date(sum / storage.length).getUTCMinutes();
  return getEstimate(excessMentors, queuePos, estimatedInterval);
};

module.exports = {
  displayAlert: displayAlert,
  computeAvgWaitTime: computeAvgWaitTime,
  connectionCount: connectionCount
};