const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req,res) => {
    console.log("hello world!")
    res.send("hello world")
})



app.listen(port, () => {
    console.log(`it is on port ${port}`)
})

module.exports = app;