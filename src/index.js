const express = ('express')



const app = express()
app.use(express.json())
app.listen(5001, () => console.log('Server up on port 5001'))