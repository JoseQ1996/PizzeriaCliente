const path = require("path")
const express = require("express")
const { request } = require("http")
const { response } = require("express")
const app = express()
app.use(express.static("dist/proyecto-pizzeria"))
app.get("*",(request,response)=>{
    response.sendFile(path.resolve(__dirname,"dist/proyecto-pizzeria","index.html"))
})
app.listen(4200,()=> {
    console.log("Servidor ejecutandose")
})

