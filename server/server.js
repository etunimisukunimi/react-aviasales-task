const express = require('express')
const emailRouter = require('./routers/email.routers')

const port = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', emailRouter)


app.listen(port, () => console.log(`Server started at localhost:${port}`))