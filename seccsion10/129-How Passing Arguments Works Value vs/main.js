const flight = "LH234";
const jonas ={
  name: 'Jonas Schedtmann',
  passport: 24739479284
}
const checkin = function(flightNum, Passengers){
  flightNum = "LH999";
  Passengers.name = 'Mr' + Passengers.name;

  if(Passengers.passport === 24739479284){
    alert('Checked in');
  }else{
    alert("Wrong passport!!")
  }
};
// checkin(flight,jonas);
// console.log(flight);
// console.log(jonas);

// const flightNum= flight;
// const Passengers = jonas;

const newPassport = function(person){
  person.passport = Math.trunc(Math.random() * 10000000000000000);
}

newPassport(jonas);
checkin(flight,jonas)