// function getCs(){
//     console.log("Hello CS students! uisng module exports")
// }
// function getIt(){
//     console.log("hello IT students!")
// }
// module.exports = {getCs,getIt}

exports.getCs=()=>{
    console.log("Hello CS students using exports!")
}
exports.getIt=()=>{
    console.log("hello IT students using exports!")
}