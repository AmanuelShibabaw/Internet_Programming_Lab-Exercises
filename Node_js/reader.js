const fs= require('fs')
fs.readFile('osinfo.txt','utf-8',(err,data)=>{
    if(err){
        console.log("Error while reading file...")
    }
    console.log("Text from file is :",data)
})