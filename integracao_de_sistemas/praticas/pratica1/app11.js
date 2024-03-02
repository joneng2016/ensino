const express = require("express")
const app = express()

const port = 3000

app.get("/", (req, res) => {
    const message = "this route is used only to show some data"

    res.send(message)
})

app.get("/plus_two_values", (req, res) => {
    let valueOne = parseFloat(req.query.valueOne ? req.query.valueOne : '0') 
    let valueTwo = parseFloat(req.query.valueTwo? req.query.valueTwo : '0')

    const message = `The Result: ${valueOne + valueTwo}`

    res.send(message)
})


app.get("/find_by_in_list_name", (req, res) => {
    const nameToFind = req.query.name

    const list = [
        {name: 'Jorge', age:20},
        {name: 'Armando', age:10},
        {name:'Fabio', age:24},
        {name:'Alexandre', age:35}
    ]

    const response = {
        result:list.find(e => e.name === nameToFind) 
    }
    
    res.json(response)
})




app.listen(port, () => console.log("api is up"))