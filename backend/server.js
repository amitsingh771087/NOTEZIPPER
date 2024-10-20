const express = require("express");
const notes = require("./data/notes.js")
const dotenv = require("dotenv")



const app = express();
dotenv.config();

app.get('/',(req , res)=>{
    res.send(`API was running on Post ${port} `)
})

app.get("/api/notes" , (req , res)=>{
    res.json(notes);

})

app.get("/api/notes/:id",(req , res)=>{
    const note = notes.find((n)=> n._id === req.params.id);

    if(note){
        res.json(note);
    }
    else{
        res.json("cannot fing the id that you are searching ");
    }
    
})

const PORT = process.env.PORT || 7000;
app.listen(PORT , console.log(`Server run on Port ${PORT}`))