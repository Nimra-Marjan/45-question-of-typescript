"use strict";
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
let invitationList = ["uncle Ali", "aunty Aisha", "baba Fateh", "dear Zirwa"];
invitationList.forEach(invitationList => console.log(`hello ${invitationList}  you are invited for dinner`));
console.log("uncle Ali will not come for dinner");
invitationList.splice(0, 1, "uncle Tahir");
invitationList.forEach(invitationList => console.log(`hello ${invitationList} you are ivited for dinner`));
console.log("have a news for you !we have now a big table for dinner");
invitationList.unshift("aunty batool");
invitationList.push("uncle salim");
invitationList.splice(3, 0, "dear farah");
console.log(invitationList);
invitationList.forEach(invitationList => console.log(`hello ${invitationList} you are ivited for dinner`));
//inform message foe new update 
console.log("their is a issue big table won,t arrive on time we have two seat for dinner");
//use of whiie to remove guest
while (invitationList.length > 2) {
    let shrinkList = invitationList.pop();
    console.log(`sorry,${shrinkList}you are not invite  `);
}
;
console.log("invition for two guest");
invitationList.forEach(invitationList => console.log(`lucky${invitationList},you are invited`));
invitationList.pop();
invitationList.pop();
console.log("empty list", invitationList);
