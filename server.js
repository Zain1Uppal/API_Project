const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const cors = require('cors')

app.use(express.json())
app.use(cors())


let cars = [
    { id:1, name: "mercedes", type: "amg"},
    { id:2, name: "bmw", type: "random"}
]


app.get('/cars', getAll)
app.get('/cars/:hid', getById)
app.post('/cars', input)
app.delete('/cars/:hid', deleteById)

function getAll(req, res){
    res.json({all:cars})
}

function getById(req, res){
    let requestId = parseInt(req.params.hid)
    let selectedCar = cars.find(b => b.id === requestId)
    res.json(selectedCar)
}

function deleteById(req, res){
    let deleteId = parseInt(req.params.hid)
    let delSelect = cars.find(b => b.id === deleteId)
    cars.splice(delSelect, deleteId)
    res.send()
}

function input(req,res){
    let newData = req.body
    let newId = cars.length + 1
    let newCar = {id: newId, ... req.body}
    cars.push(newCar)
    res.status(201).json({ message: `done adding`})
}



app.listen(port, () => {
    console.log(`it is on port ${port}`)
})

module.exports = app;