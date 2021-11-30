const express = requre("express");
const app = express();

app.use("/", (req, res, next)=>{
    res.status(200).json({
        message:"Hello there is the project Coolie!!!"
    })
})


app.listen(process.env.PORT_BACK);