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
  this.showTime = showTime;
}


//movieTickets.addTicket(customer1); 


//Business logic for ticket pricing
function ticketPricing(ticket) {
  let price = 10;
  if (movieTickets.tickets[0].movie == "oceans-11") {
    price -= 10;
  } else if (movieTickets.tickets[0].customerAge >= 65) {
    price -= 5;
  } else if (movieTickets.tickets[0].showTime == "daytime") {
    price -= 4;
  };
  return price;
};


//UI Logic
let movieTickets = new MovieTickets();

$(document).ready(function() {
  $("form#movie-ticket").submit(function(event) {
    event.preventDefault();
    let inputName = $("input#name").val();
    let inputAge = $("input#age").val();
    let inputMovie = $("input:radio[name=movie]:checked").val();
    let inputTime = $("#show-time").val();
    $("input#name").val("");
    $("input#age").val("");
    let newTicket = new Ticket (inputName, inputAge, inputMovie, inputTime);
    movieTickets.addTicket(newTicket);
    let finalPrice = ticketPricing(newTicket);
    console.log(finalPrice);
    
    
  });
});

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