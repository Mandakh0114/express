const express = require('express');
const axios = require('axios');



const app = express()
const port = 8080;

app.get('/', (req,res) =>{
    res.send('Axios is running')
})

const users = {
    users: [
        { id: 1, Firstname: "MAndakh1", Lastname: 'Mandakh1'},
        { id: 2, Firstname: "MAndakh2", Lastname: 'asduiha2'},
        { id: 3, Firstname: "MAndakh3", Lastname: 'Mandakh3'},
        { id: 4, Firstname: "MAndakh4", Lastname: 'asduiha4'},
        { id: 5, Firstname: "MAndakh5", Lastname: 'Mandakh5'},
        { id: 6, Firstname: "MAndakh6", Lastname: 'asduiha6'},
    ]
}

app.get("/users", (req,res) =>{
    res.status(200).json(users)
})

app.get("/users/:id", (req,res) =>{
    const id = req.params.id;
    const user = users.users.filter((user, i) => user.id == id);
    res.status(1000).send(...user)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

axios.get(users)


