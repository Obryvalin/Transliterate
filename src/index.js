const express = require("express");

const PORT = 80;

webServer = express();
//===================================================

webServer.get('/express',(request,response)=>{
    console.log("Request from IP:"+request.ip);
response.send(request.query);
});

//===================================================
const launch = (port) => {
    webServer.listen(port, ()=>{

    console.log("Express fired on port "+port);
    })
}
launch(PORT);
