var arr = [];
    function random(min, max) {
        min = Math.ceil(min);
        max = Math.ceil(max);
        return Math.floor(Math.random()*(max + 1 - min)) + min;
    }
    
    function massiv (x) {
        var i = 10
        for(let j = 0; j < i; j++){
            var number = random (1,50);
            x.push(number);
            console.log(number);
        }
    }
massiv(random);