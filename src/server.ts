import express from "express";
import cors from 'cors'
import router from "./api/v1/routes/router";
import testuser from "./tesUserRoute"
import accessPortector from "./middleware/access-protector";
require('dotenv').config()

const app = express()

// app.use(accessPortector)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded( { extended: true }))

// Route
app.use('/api/v1', router)
app.use('/', testuser)

app.listen(process.env.PORT || 9090, () => {
    console.log('Server is running ...')
})



