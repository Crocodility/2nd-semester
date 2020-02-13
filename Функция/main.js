let Bye = function(c,d){
    if (c<d) {
        return (c+2)
    } else {
        return (d-2)
    }
};


function Hello (a,b){
    if (typeof(a) != 'string' || typeof(b) != 'string'){
        if (a>b){
            console.log(a+1);
        }else if(a<b){
            console.log(b-1);
        }

    }else {
        console.log('Error');
    }
}
Hello(12,13)