const express = require('express')
const partidaRoute = require('./router/partida.route')
const app = express()


app.use(express.json())
app.use('/api/v1/world_cup', partidaRoute)
app.listen(5001, () => console.log('Server up on port 5001'))