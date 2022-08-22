const express = require('express');
const dotenv = require("dotenv").config()

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json())


app.use('/calculate', require('./routes/calculatorRoutes'))


// app.get('/', (req, res) => {
//     res.status(200).json({server: "started"})
// })

app.listen(PORT, () => console.log(`server started on port ${PORT}`))

