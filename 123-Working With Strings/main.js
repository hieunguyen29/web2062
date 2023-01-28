console.log('a+very+nice+string' .split('+'));
console.log('Jonas Schedtmann'.split(' '));

const[firstName,lastName] = 'Jonas Schedtmann'.split(' ');
const newName = ['Mr.' , firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const captializeName = function(name){
const names= name.split(' ');
const namesUpper =[];
for (const n of names){
   namesUpper.push(n[0].toUpperCase()+ n.slice(1));
   // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
}
console.log(namesUpper.join(' '));
}
captializeName('jessica ann smith davis')
captializeName('jonas scheddtman')

