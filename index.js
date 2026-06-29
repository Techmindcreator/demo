
let prom=new Promise(function(success,reject){
    var ok=true;
    if(ok) success();
    else reject();
})
prom.then(suc).catch(fail)
function suc(){
console.log("mission Success");
}
function fail(){
    console.log("mission Fail");
}