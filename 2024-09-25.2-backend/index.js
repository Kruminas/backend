import express from 'express'
const app = express();


app.get('/', function (req, res) {
    res.json('Hello world 2');
})

app.post('/', (req, res) => {
    res.json('Informacija sėkmingai išsaugota');
});

app.put('/', (req, res) => {
    res.json('Informacija atnaujinta')
})

app.delete('/', (req, res) => {
    res.json('Informacija ištrinta')
})


app.listen(3000);