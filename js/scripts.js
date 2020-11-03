// business logic for MovieTickets
function MovieTickets () {
  this.tickets = [];
  this.currentId = 0;
}

MovieTickets.prototype.addId = function(customer) {
  customer.id = this.assignId();
  this.customers.push(customer)
}

MovieTickets.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

// business logic for Customer
function Tickets (customerName, customerAge, movie, showTime) {
  this.customerName = customerName;
  this.customerAge = customerAge;
  this.movie = movie;
  this. showTime = showTime;
}

$(document).ready(function) {

}