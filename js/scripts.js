// business logic for MovieTickets
function MovieTickets () {
  this.tickets = [];
  this.currentId = 0;
}

MovieTickets.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  this.tickets.push(ticket)
}

MovieTickets.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

// business logic for Customer
function Ticket(customerName, customerAge, movie, showTime) {
  this.customerName = customerName;
  this.customerAge = customerAge;
  this.movie = movie;
  this. showTime = showTime;
}

let movieTickets = new MovieTickets()
let customer1 = new Ticket ("Tom", "13", "Tenant", "12:00");
movieTickets.addTicket(customer1); 


//Business logic for ticket pricing
function 

//UI Logic
$(document).ready(function) {

}

/* 
acccount for pricing, 
for first or second run theater showing, 
const ticketPrice = 10
if (age >= 65) {
  ticketPrice -= 2
}

if (movie = "Oceans 11" || movie = ) {
  ticketPrice -= 5;

if (movieTime < 4) {
  ticketPrice -=2;
}
}
*/