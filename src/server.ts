import express , { Express, Request, Response } from "express";

const app : Express =  express()

app.get('/', (req:Request, res: Response) => {

})
app.listen(3000, () => {
    console.log("Server listening port 3000")
})
