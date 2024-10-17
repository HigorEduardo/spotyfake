import  Express from "express"

const app = Express()

app.get('/pegar', function(req, res){
    res.send('enviar esta mensagem')
})

app.get('/outro', function(req, res){
    res.send('enviar esta porra')
})

app.listen(8000)