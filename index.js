let expres = require("express");
let app = expres();
const PORT = 3000;

app.get("/", (req, res, next) => {
    res.send("Hola Mundo");
}).listen(PORT, () =>{
    console.log(`server: http://localhost:${PORT}`)
})