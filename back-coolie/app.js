const express = require("express");
const app = express();

app.use((req, res, next)=>{
	res.setHeader('Access-Control-Allow-Origin', '*');//允许哪个路径来访问 *代表全部
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');//允许哪个HttpMethod访问
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');//允许在header里加入的参数
	next();
})

app.use("/", (req, res, next)=>{
    res.status(200).json({
        message:"Hello there is the project Coolie!!!"
    })
})


app.listen(process.env.PORT_BACK, ()=> {
    console.log("Connected Back")
});