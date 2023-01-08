const restaurant = {
    name : 'Classico Italiano',
    location : 'Via Angelo Tavanti 23, Frienze, Italy',
    categories : ['Italian','Pizzeria','Vegetarian','Organic'],
    startermenu : ['Focaccia','Bruscheta','Garlic','Bread','Capreses Salad'],
    mainMenu : ['Pizza','Pasta','Risotto'],

    order: function(starterIndex, mainIndex){
        return [this.startermenu[starterIndex],this.mainMenu[mainIndex]]
    },
};

const arr =  [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x ,y ,z] = arr;
console.log(x,y,z);
console.log(arr);
let [main, secondary] = restaurant.categories;
console.log(main,secondary);
[main ,secondary] = [secondary, main];4
console.log(main, secondary)
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);
const nested = [2, 4, [5, 6]];
const [i, ,[j,k]] = nested;
console.log(i,j,k);

