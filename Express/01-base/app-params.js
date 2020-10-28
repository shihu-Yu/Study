const express = require('express')
const app = express()
app.use(express.static('public'))

const port = 3000

app.all("/",(req,res,next)=>{
    console.log('app all...')
    next()
})
app.get('/users/:userId/books/:bookId',(req,res)=>{
    
    console.log(req.params)
    res.send('hello get')
})
app.delete('/',(req,res,next)=>{
    console.log(req.query)
    console.log('handle something...')
    next()
    })

app.listen(port,()=>{
    console.log('app is running at http://127.0.0.1:3000')
})