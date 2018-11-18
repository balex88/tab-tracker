const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())

const PORT = process.env.PORT || 8081

app.post('/register',(req,res) => res.send(
    {
        Message: `User: ${req.body.email} has been registered`
    }
))

app.listen(PORT, console.log(`Application Server started on port: ${PORT}`))