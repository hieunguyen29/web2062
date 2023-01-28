const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

///fix captialization in name
const passenger = 'joNas';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing emails
const email = 'hello@jonas.io';
const loginEmail = 'Hello@Jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const nomarlEmail = loginEmail.toLowerCase().trim();
console.log(nomarlEmail);
console.log(email === nomarlEmail);

//replacing
const priceGB = '278,97£';
const priceUS = priceGB.replace('£','$').replace( ',', '.' )  ;
console.log(priceUS);


const annoucment = 'All passenger come to boarding door 23. Boarding door 23';
console.log(annoucment.replace('door','gate'));
console.log(annoucment.replace(/door/g,'gate'));


