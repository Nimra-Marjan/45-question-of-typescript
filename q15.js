"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to
//send out a new set of invitations. You’ll have to think of
// someone else to invite.
let invitationList = ["uncle Ali", "aunty Aisha", "baba Fateh", "dear Zirwa"];
invitationList.splice(0, 1, "uncle Tahir");
console.log(invitationList);
invitationList.forEach(invitationList => console.log(`hello ${invitationList} you are ivited for dinner`));
