let http =  require("http");
const PORT = 3000;

let serverApp = http.createServer((req, res) => {
    res.end("Holiwiii");
})

serverApp.listen(PORT, ()=>{
    console.log(`SAPEEE http://localhost:${PORT}`);
})