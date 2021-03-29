const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

const hand = handlebars.create({
    defeaultLayout:"main",
    helpers:{ }
     })

app.engine("handlebars", hand.engine)
app.set("view engine","handlebars")
    
 
app.use(express.static(__dirname + "/public"));
app.get('/', function (req, res) {
res.render("LandingPage")
})

app.get('/perfil', function (req, res) {
    res.render("Perfil")
    })

app.get('/MinhasViagens', function (req, res) {
       res.render("Minhas_viagens")
       })

app.get('/MeusGrupos', function (req, res) {
    res.render("Meus_grupos")
    })
app.listen(1111)