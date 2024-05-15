let invitationList=["uncle Ali","aunty Aisha","baba Fateh","dear Zirwa"];
invitationList.forEach(invitationList=>console.log(`hello ${invitationList}  you are invited for dinner`));

console.log("uncle Ali will not come for dinner");

invitationList.splice(0,1,"uncle Tahir");
invitationList.forEach(invitationList=>console.log(`hello ${invitationList} you are ivited for dinner`));

console.log("have a news for you !we have now a big table for dinner");

invitationList.unshift("aunty batool");

invitationList.push("uncle salim");

invitationList.splice(3,0,"dear farah");

console.log(invitationList);
invitationList.forEach(invitationList=>console.log(`hello ${invitationList} you are ivited for dinner`));
