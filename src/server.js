import app from "./app.js";

const port = 3000;

app.listen(port,(req,res)=> {
    console.log(`Host in http://localhost:${port}`)
})