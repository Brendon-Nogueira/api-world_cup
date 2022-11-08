const express = ('express')
const app = express()


app.use(express.json())
app.use('/api/v1/world_cup')
app.listen(5001, () => console.log('Server up on port 5001'))