import express from "express";
import morgan from "morgan";
import { baseControl } from './routes/index.js'

const app=express()

app.use(express.json())
app.use(morgan('dev'))

app.use("/ketan/c1",baseControl)

export default app

