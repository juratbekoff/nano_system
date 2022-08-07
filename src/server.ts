import express from "express";
import cors from 'cors'
import mainRoute from "./routes/mainRoute";

import tokenValidation from "./auth/token_validation";


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded( { extended: true }))

// Route
app.use('/api/v1', mainRoute)

app.listen(process.env.PORT || 8085, () => {
    console.log('Server is running ...')
})



// localhost:8085/backend/ceo/application/system