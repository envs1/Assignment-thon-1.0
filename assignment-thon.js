var text = prompt('what type of car would you like(choices: suv , sedan, or sports) ? ');
if (text == "suv" ){
console.log(cars.suv)}
if (text == "sedan"){
console.log(cars.sedan)}
else if (text == "sports"){
    console.log(cars.sports);
}

var cars  = {
         "suv":{
             "Car Type":"Suv",
             Price:"70 dollars a day",
             Availabl:"not available",
             "Total available": 0,
             "Available for request":"no",
        },
        "sedan":{
             "Car Type":"Sedan",
             Price:"70 dollars a day",
             Available:"available",
             Total: 2,
             "Available for request":"yes",
        },
        "sports": {
             "Car Type": "Sports",
             Price:"80 dollars a day",
             Available:"available",
             Total: 10,
             "Available for request":"yes",
        }
};