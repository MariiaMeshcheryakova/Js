// Задание 1
const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};
let arr = []
  for(let result in citiesAndCountries) 
 console.log(arr = result+' - это '+citiesAndCountries[result])
 

//  Задание 2

function getArray(){
  const arrOne = []
  const amount = 12;
  for (let i = 0; i < amount/3; i++){
   const arrTwo = []
      for (let j = 0; j < 3; j++){
          arrTwo.push((j+1)+i*3)
   }
   arrOne.push(arrTwo)
  } console.log(arrOne)
}
getArray()



// Задание 3

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Cуббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Sunday'],
}
function getNameOfDay(){
    const lang = 'en';
    const day = 3;
    for (let key in namesOfDays){
        if( lang == key){
      console.log(namesOfDays[lang][day-1]);
        }
    }
}
getNameOfDay()

// Задание 4

const numbers = [19, 5, 42, 2, 77]
let min = Number.MAX_VALUE
let min2 = min
  for(let num of numbers){
  if(num < min){
    min2 = min
    min = num
  }
}
  console.log(min + min2)

