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


app.get("/find_age_by_list_name", (req, res) => {
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

class CatDTO {
    constructor(
        listOfCats
    ) {
        this.listOfCats = listOfCats
    }

    getListOfCats() {
        return this.listOfCats
    }
}


class CatController {
    constructor(catDTO) {
        this.catDTO = catDTO
    } 

    findAllCats(req, res) {
        if (!req.query.catName) {
            res
                .status(400)
                .json(
                    {
                        message:"define the name of cat in queryString catName, please"
                    }
                )

            return 
        }


        const cats = this.catDTO.getListOfCats()
            .filter(
                e => e.catName === req.query.catName
            )

        cats.length > 0 ? res.json(cats) : res.status(404).json({message:"cat not found"})
    }
}


const cat = new CatController(
    new CatDTO(
        [
            {catName: 'Miau', tutor: "Jorge"},
            {catName: 'Tom', tutor: "Alex"},
            {catName: 'Frajola', tutor: "Witon"},
            {catName: 'Bola de Neve', tutor: "Orlando"},            

        ]
    )
)


app.get("/cat", (req, res) => {
    cat.findAllCats(req, res)
})


app.listen(port, () => console.log("api is up"))