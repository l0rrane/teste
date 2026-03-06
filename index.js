const express =  require("express")
const app = express()

app.get("/:par", (req, res)=>{
    const {par} = req.params
    res.status(200).json({
        mensagem:`Seu nome é: ${par}`
    })
    
})

app.get("/idade/:nome/:idade", (req, res)=>{
    const {nome, idade} = req.params
    res.status(200).json({
        mensagem:`Seu nome é: ${nome}, Sua idade é: ${idade}`
    })
})


app.get("/teste", (req, res)=>{
    res.send("Olá Mundo, test branch")
})

app.listen(3011,  ()=>{
    console.log(" Gabriela o Servidor esta ligado")
})