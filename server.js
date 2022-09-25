const PORT = 8000
import axios from 'axios'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

axios.default
dotenv.config()
const app = express()
app.listen(PORT,()=> {
    console.log(`Running on PORT: ${PORT}`)
})