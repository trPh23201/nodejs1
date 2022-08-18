require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const route = require('./route')
const dbSetup = require('./config/db')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')

dbSetup()

app.use(cookieParser())
app.use(cors())
app.use(helmet())
//MiddleWare body-parser
app.use(
    express.urlencoded({
        extended: true,
    }),
); //For submit HTML
app.use(express.json()); //For fetch, XMLRequest, axios,....
app.use(morgan('tiny'), route)

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})