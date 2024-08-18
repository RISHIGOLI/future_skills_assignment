const app = require('./app')
const config = require('./config')

const PORT = 5000

app.listen(PORT, () => {
    console.log(`server is running on the port : ${PORT}`);
})