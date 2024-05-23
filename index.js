const express = require("express");
const app = express();
const port = 3001;
const { getRobot, getRobotById } = require("./controllers/robot.controller");

app.get("/",getRobot);
app.get("/:id",getRobotById)


app.listen(port,()=>{
    
    console.log("Ahora siiiiiii");
    console.log(`Conectado existosamente en el puerto`);
})