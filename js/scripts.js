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
function ticketPricing() {
  let price = 10;
  if (movieTickets.tickets[movieTickets.currentId-1].movie == "oceans-11") {
    price -= 10;
  } else if (movieTickets.tickets[movieTickets.currentId-1].customerAge >= 65) {
    price -= 5;
  } else if (movieTickets.tickets[movieTickets.currentId-1].showTime == "daytime") {
    price -= 4;
  };
  
  return price;
};


//UI Logic
let movieTickets = new MovieTickets();

function showTicket(tix, price) {
  let ticketList = $("p#display")
  ticketList.append(tix.tickets[tix.currentId-1].customerName + " " + tix.tickets[tix.currentId-1].movie + " " + price + "$" + "<br>")
}


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
    //console.log(finalPrice);
    showTicket(movieTickets, finalPrice);
    
    
  });
});

/* 
1. 
2. 
3. display for multlple tickets
4. displays total price? 

*/