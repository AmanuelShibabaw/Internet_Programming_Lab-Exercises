const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('welcome to school of computing page !')
    }
    else if(req.url === '/osinfo'){
        fs.readFile('osinfo.txt','utf-8',(err,data)=>{
            if(err){
                console.log("Error occured")
            }
            res.writeHead(200,{'Content-Type':'text/plain'})
            res.end(data)
        })
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'})
        res.end('404  page Not Found')
    }
})
server.listen(3000,()=>{
    console.log("server running in port 3000..")
})