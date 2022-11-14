const express = require('express')
const router = require('./router/partida.route')
const app = express()


app.use(express.json())
app.use('/api/v1/world_cup', router)
app.listen(8087, () => console.log('Server up on port 5001'))