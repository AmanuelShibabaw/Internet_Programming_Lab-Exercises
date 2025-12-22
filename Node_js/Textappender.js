const fs = require('fs')
const os = require('os')
const freeSpace = os.freemem()
const totalspace = os.totalmem()

exports.fileReader=()=>{
fs.appendFile('osinfo.txt',`free spaec:${freeSpace}\ntotal space:${totalspace}\n`,(err)=>{
    if(err){
        console.log("Error during appending txt")
    }
    console.log("text appended succesfully!")
})
}