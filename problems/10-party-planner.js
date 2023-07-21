class PartyPlanner{
constructor(){
	this.guestList = [];
}

addToGuestList(name){
	this.guestList.push(name);
}

throwParty(){
	if(this.guestList.length <= 0){
		return `Gotta add people to the guest list`
	}

	let allNames = this.guestList.join(" and ")
	return `Welcome to the party ${allNames}`
	}
}
/* FORTESTING ONLY

const party = new PartyPlanner();

console.log(party.throwParty()); // prints "Gotta add people to the guest list"

party.addToGuestList("James");
console.log(party.throwParty()); // prints "Welcome to the party James"

party.addToGuestList("Alvin");
console.log(party.throwParty()); // prints "Welcome to the party James and Alvin"
*/
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}