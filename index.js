let expres = require("express");
let app = expres();
const PORT = 3000;

app.get("/productos", (req, res, next) => {
    res.send("Productos");
});

app.get("/productoRandom", (req, res, next) => {
    res.send("Productos Ramdon")
})

app.listen(PORT, () =>{
    console.log(`server: http://localhost:${PORT}`)
})