let http = require("http");
let moment = require("moment");
const PORT = 3000;

http.createServer((req, res) => {
    let hour = moment(). format("HH");
    
    let sms = "";

    if (hour >= 6  &&  hour <= 12){
        sms = "Buenos dias";
    }else if(hour < 12 && hour <= 18){
        sms = "Buenas tardes";
    }else{
        sms = "Buenas noches";
    };

    console.log(hour);
    res.end(`Hola, desde mi primer servidor! La hora es: ${hour}`);
}).listen(PORT, () => {
    console.log(`Mi servidor escuchabdo desde http://localhost:${PORT}`)
})