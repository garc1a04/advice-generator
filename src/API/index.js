import { Router } from "express";
import axios from "axios";

const api = Router();
const url_API = "https://api.adviceslip.com";

api.get("/api/advice-random",async (req,res)=> {
    try {
        const result = await axios.get(url_API+"/advice");

        res.json(result.data.slip);
    } catch (error) {
        res.json({message: error})
    }
})

export default api;