const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const chefData = require('./chefData.json')
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
});
app.get('/chefData', (req, res) => {
    res.send(chefData)
  })
app.listen(5000,()=>{
    console.log("Server is running 5000");
})