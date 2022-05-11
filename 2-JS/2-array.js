let friends = ["Amr", "Sondos", "Hadeer", "Ahmed", "Radwa"];

if (Array.isArray(friends)) {
  console.log("Yay, This is Array");
  console.log(friends.join(", "));
} else {
  console.log("Mmmm, This is not Array");
}

console.log("Array:");
console.log(friends);

friends.splice(2, 1);
console.log("Splice index of 2, 1 item:");
console.log(friends);

friends.splice(3, 0, "Sameh");
console.log("Add item in index 3:");
console.log(friends);

friends.push("Hadeer");
console.log("Push:");
console.log(friends);

friends.unshift("Ahmed");
console.log("Unshift:");
console.log(friends);

friends.pop();
console.log("Pop:");
console.log(friends);

friends.shift();
console.log("Shift:");
console.log(friends);

friends.sort();
console.log("Sorted:");
console.log(friends);

friends.reverse();
console.log("Reversed:");
console.log(friends);

let otherFriends = ["Nourhan", "Aya", "Esraa"],
  allFriends = friends.concat(otherFriends);
console.log(allFriends);

console.log("Slice(2, 4)");
console.log(allFriends.slice(2, 4));

console.log("Slice(-5, -3)");
console.log(allFriends.slice(-5, -3));

let specialFriend = allFriends.indexOf("Amr");
console.log(specialFriend, allFriends[specialFriend]);

for (const friend of friends) {
  console.log(friend);
}
