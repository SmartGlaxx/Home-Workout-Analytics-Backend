require('dotenv').config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000
const routeNotfoundMiddleware = require("./middlewares/route-not-found")

const connection = require("./db/connection")

const userRouter = require("./routes/userRoute")
const authRouter = require("./routes/authRoute")
const heallthRouter = require("./routes/healthAssessmentRoute")
const bodyMetrics = require("./routes/bodyMetricsRoute")

app.use(express.json())
app.options("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, Content, Accept, Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
  });
  app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

app.get('/', (req, res)=>{
    try{
        res.send("Home Page")
    }catch(error){
        console.log("Error connecting")
    }
})
app.use("/auth", authRouter)
app.use("/user", userRouter)
app.use("/health/", heallthRouter)
app.use("/metrics/", bodyMetrics)


app.use(routeNotfoundMiddleware)

const runServer = async()=>{
    try{
        await connection(process.env.DB_URL)
        app.listen(PORT, ()=>{
            console.log(`App running on port ${PORT}`)
        })
    }catch(error){
        console.log(error)
    }
}

runServer()