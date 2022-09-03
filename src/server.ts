import express from "express";
import cors from 'cors'
import router from "./routes/router";
import tokenValidation from "./auth/token_validation";
import routerTest from "./test/testRoute"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded( { extended: true }))

// Route
app.use('/api/v1', router)
app.use(routerTest)

app.listen(process.env.PORT || 8085, () => {
    console.log('Server is running ...')
})



