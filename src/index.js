const express = require("express");

const PORT = 80;

webServer = express();
//===================================================

webServer.get('*',(request,response)=>{
response=request.body.toJSON();
});

//===================================================
const launch = (port) => {
    webServer.listen(port, ()=>{

    console.log("Express fired on port "+port);
    })
}
launch(PORT);
