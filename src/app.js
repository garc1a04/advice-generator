import express from 'express'
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";
import api from './API/index.js';

const app = express();
const dirName = dirname(fileURLToPath(import.meta.url));
const urlAPI = "http://localhost:3000";
var advice = null;

//middleware
app.use(express.static(dirName+'/public'));
app.use(api);


//routes
app.get("/", (req,res)=> {
    res.render(dirName+'/view/index.ejs',{
        data: advice
    });
})

app.get("/api", async (req,res)=> {
    try {
        const result = await axios.get(urlAPI+"/api/advice-random");

        advice = result.data;
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
});

export default app;