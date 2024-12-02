import express from "express"
import customerRouters from "./controllers/Customer/CustomerRoutes"

const app = express()
app.use(express.json())

app.use("/api", customerRouters)

app.listen(3000, "0.0.0.0")