const os = require('os')
const fs = require('fs')
const osType = os.type()
const osArch = os.arch()

fs.writeFileSync('osinfo.txt', `OS Type: ${osType}\nOS Architecture: ${osArch}\n`,(err)=>{
    if (err) {
        console.error('Errorr writing to file', err);
    }
    console.log("File written succesfully!!!!")
})
console.log("os type:", osType)
console.log("os arch:", osArch)