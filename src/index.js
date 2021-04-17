const express = require("express");
const path = require("path");
const transliterate = require("./transliterate.js");

const PORT = 80;
let webServer = express();
//===================================================

webServer.get('/transliterate',(request,response)=>{
    console.log("Request from IP:"+request.ip +"\t\t"+request.query.string);
    if (request.query.string)
    {
    response.send(transliterate.transliterate(request.query.string));
    }

});
webServer.get('*',(request,response)=>{
    response.sendFile(path.join(__dirname,'index.html'));
})
//===================================================
const launch = (port) => {
    webServer.listen(port, ()=>{

    console.log("Express fired on port "+port);
    })
}
launch(PORT);
