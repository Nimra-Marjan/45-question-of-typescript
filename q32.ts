let currentUser = [ "king","mano","rida","jiya ","saika","rani",];
let newUser =[ "vishah","hiba","Rida","mahira","rani"];
// CHeak username avalibility foe new user through loop function
newUser.forEach( newONEUser =>{
if(currentUser.some(currentOneUser => currentOneUser.toLowerCase() === newONEUser.toLowerCase() )){
    console.log(`sorry, ${newONEUser} this name is already using by otheruser`)
}else{
    console.log(`HELLO ${newONEUser} this name is avaliable`)
}
})