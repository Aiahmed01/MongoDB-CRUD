const express = require('express');
const db = require('./config/connection')
const routes = require('./routes')


const PORT = process.env.PORT || 3001;
const app = express()

app.use(express.urlencoded({extended: true})) 
app.use(express.json())
app.use(routes);  

db.once('open', ()=>{
    app.listen(PORT, ()=>{
        console.log(` 
        🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
         AAAAA   BBBB   DDDDD  UU  UU       LL       LL        AAAAA
        AA   AA  B   B  D   D  UU  UU      LL       LL        AA   AA
        AAAAAAA  BBBB   D   D  UU  UU     LL       LL         AAAAAAA
        AA   AA  B   B  D   D  UU  UU     LL       LL         AA   AA
        AA   AA  BBBB   DDDDD    UUUU     LLLLLL   LLLLL      AA   AA
        🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀        
             Server is 🏃‍♂️ on ${PORT}!!  😂👍`)
    })
})