const express = require('express')

const app = express()

app.use(express.static(`${__dirname}/public`))

app.listen(4500, () => console.log('Running on port 4500'))



