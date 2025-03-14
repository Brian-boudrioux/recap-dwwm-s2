// type primitif =>

let age = 32;
let pseudo = "Brian";
let isAdmin = false;
let description = null;
let nonDefinis;
let genre = "M";

// type non primitifs =>

const user1Details = { age, pseudo, isAdmin, description, avatar: "brian.png", genre };
const user2Details = {
	age: 38,
	pseudo: "Omaya",
	isAdmin: true,
	description: null,
	avatar: "omaya.png",
  genre: "F"
};

const users = [
	user1Details,
	user2Details,
	{
		age: 22,
		pseudo: "Rafael",
		isAdmin: false,
		description: null,
		avatar: null,
    genre: "M"
	},
];

// console.log(users);

// conditions if, else if, else =>

if (users[0].age > users[1].age) {
	console.log(users[0].pseudo + " est plus vieux que " + users[1].pseudo);
} else if (users[2].age > users[0].age) {
	console.log(users[2].pseudo + " est plus vieux que " + users[0].pseudo);
} else if (users[1].age > users[2].age) {
	console.log(users[1].pseudo + " est plus vieille que " + users[2].pseudo);
} else {
	console.log(users[1].pseudo + " est plus vieille que " + users[0].pseudo);
}

// condition avec opérateur && ||

if (users[0].age > users[1].age && users[0].age > users[2].age) {
	console.log("its works 1");
}

if (users[0].age > users[1].age || users[0].age > users[2].age) {
	console.log("its works 2");
}

// function =>

function getGenre(user) {
  let genre;
	if (user.genre === "M") genre = "vieux";
	else genre = "vieille";

  return genre;
}

function whoIsOlder(user1, user2) {
  
  // let genre = getGenre();

  let genre1 = (user1.genre === "M") ? "vieux" : "vieille";
  let genre2 = (user2.genre === "M") ? "vieux" : "vieille";

	if (user1.age > user2.age) {
    console.log(user1.pseudo + " est plus " + genre1  + " que " + user2.pseudo);
	} else {
		console.log(user2.pseudo + " est plus " + genre2 + " que " + user1.pseudo);
	}
}

whoIsOlder(users[0], users[1]);
whoIsOlder(users[0], users[2]);
whoIsOlder(users[1], users[2]);


function calculAge(birthYear, year) {
  console.log(year - birthYear);
}

function calculBirthDate(age, year) {
  return year - age;
}

const birthDate = calculBirthDate(90, 2025);
console.log(birthDate);

calculAge(1992, 2025);
calculAge(1982, 2025);
calculAge(1997, 2025);