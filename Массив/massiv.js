
var a = [];

function getRandomInt(max) {
    return Math.round(Math.random() * Math.round(max));
  }

for (var i = 0; i < 5; i++){
    a.push(getRandomInt(10));
}

console.log(a);

a.forEach(element => console.log(element));

