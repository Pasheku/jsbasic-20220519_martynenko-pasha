let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

function namify(users) {
  let userNames = users.map((element) => element.name);
  return userNames;
}
