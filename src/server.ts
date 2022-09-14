import express from "express";
import cors from 'cors'
import router from "./api/v1/routes/router";
import router_v2 from "./api/v2/routes/router_v2"
import router_v3 from "./api/v3/routes/router";

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded( { extended: true }))

// Route
app.use('/api/v1', router)
app.use('/api/v2', router_v2)
app.use('/api/v3', router_v3)

app.listen(process.env.PORT || 8085, () => {
    console.log('Server is running ...')
})



