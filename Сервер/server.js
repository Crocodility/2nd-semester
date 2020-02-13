const http = require("http");
http.createServer(function(request, response){
    
    response.end("Твой гороскоп на сегодня: ");

}).listen(80, "127.0.0.1", function(){
    console.log ("Сервер начал прослушивание на 80 порту")
});