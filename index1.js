// Задание 1
for(let i = 1; i <= 10; i++) {
     if(i % 2 == 0) {
         console.log('Fiz')
     }else if(i % 3 == 0 ) {
        console.log('FizBuz')
     }else if(i % 2 !== 0) {
        console.log('Buz')
    }
}

// Задание 2

let factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); };

console.log(factorial(6));

// Задание 3

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

console.log(Math.ceil(weeksAmount*consumptionPerWeek/sheetsInReamPaper))

// Задание 4

const roomsOnFloor = 3;
const floors = 9;
const porches = 5
const roomNumber = 100;

let floor = Math.ceil(roomNumber / roomsOnFloor);

const porch = Math.ceil(floor / floors);

if(floor > 9) {
    floor = floor - (porch - 1) * floors;
}

console.log('Квартира: ' + roomNumber,'Подъезд: ' + porch,'Этаж: ' + floor)
