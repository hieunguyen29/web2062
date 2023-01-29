// LAB1.2: (SECTION	9: DATA	STRUCTURES. MODERN	OPERATORS	AND	STRINGS	> CODING	
//     CHANLLENGE	#2)
//     1. Lặp mảng game.scored array và in ra cầu thủ cùng với số bàn thắng đã ghi (Ví
//     dụ: "Goal 1: Lewandowski")
//     2. Sử dụng vòng lặp để tính tỉ lệ kết quả trận đấu và in ra console (Chúng ta đã
//     học cách tính trung bình tổng ở phần trước, các bạn có thể xem lại nếu không
//     nhớ)
//     3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//      Tỉ lệ thắng của Bayern Munich: 1.33
//      Tỉ lệ hòa of draw: 3.25
//      Tỉ lệ thắng của Borrussia Dortmund: 6.5
//     Lấy ra tên đội bóng trực tiếp từ object 'game', bạn không nên "hardcode" tỉ lệ
//     thắng của mỗi đội (ngoại trừ trường hợp 2 đội hòa nhau).
//     Chú ý: Lưu ý cách tỷ lệ cược và đối tượng trò chơi có tên thuộc tính giống nhau �
//     �
//     Thêm: Tạo ra 1 đối tướng là 'scorers', đối tượng này gồm các thuộc tính với key
//     (tên thuộc tính) là tên cầu thủ đã ghi bàn, value (giá trị) là số bàn thắng đã ghi.
//     Ví dụ:
//      {
//     Gnarby:1,
//     Hummels:1,
//     Lewandowski: 2
//      }
// LAB2.4: (SECTION	10: A CLOSER	LOOK	AT	FUNCTIONS	> CODING	CHANLLENGE	#2)
// Lấy hàm IIFE dưới đây, và ở cuối function hãy gắn 1 event thay đổi màu của thẻ
// 'h1' sang màu xanh dương (blue) sau mỗi lần click vào element body. Chúng ta 
// không select đến thẻ h1 đó nữa!
// Và sau đó hãy tự giải thích lại cho chính mình hoặc bạn học của mình Tại sao nó 
// lại hoạt động!
// Hãy bình tĩnh nghĩ xem chính xác thì khi nào callback được thực thi, và biến được 
// sử dụng trong ví dụ này có ý nghĩa gì?.
// (function () {
// LAB	2
// LẬP TRÌNH JAVASCRIPT NÂNG CAO TRANG 4
//  const header = document.querySelector('h1');
//  header.style.color = 'red';
//  document.querySelector('body').addEventListener('click', function () {
//  header.style.color = 'blue';
//  });
// })();

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, //Open 24 hours
        close: 24,
    },
};
const restaurant = {
    name: 'Classion Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    
    // ES6 enhanced object literals
    openingHours,
    


    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(
            `Order received! ${this.starterMenu
            [starterIndex]} and ${this.mainMenu[mainIndex]}
            will be delivered to ${address} at ${time}`
        );
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};
const game = {
    team1: 'Bayern Munich',
    team2: "Borrussia Dortmund",
    players:
        [
            [
                'Neuer',
                'Pavard',
                'Martinez',
                'Alaba',
                'Davies',
                'Kimmich',
                'Goretzka',
                'Coman',
                'Muller',
                'Gnarby',
                'Lewandowski',
            ],
            [
                'Burki',
                'Schulz',
                'Hummels',
                'Alanji',
                'Hakimi',
                'Weigl',
                'Witsel',
                'Hazard',
                'Brandt',
                'Sancho',
                'Gotze',
            ],
        ],
        score: '4:0',
        scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
        date: 'Nov 9th, 2037',
        odds: {
            team1: 1.33,
            x: 3.25,
            team2: 6.5,
        },
};

//1
for (const [i, player] of game.scored.entries())
    console.log(`Goal ${i + 1}: ${player}`);

//2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}