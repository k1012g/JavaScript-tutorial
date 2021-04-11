// 02-01
alert("I'm JavaScript");

// 02-04
let admin, name;
name = "John";
admin = name;
alert(admin);

const BIRTHDAY = "19XX/10/12";

// 02-06
let userName = prompt("What's your name?");
if (!userName) {
  userName = "no name";
}
alert("You're " + userName);

// 02-10
let input = prompt("What's the “official” name of JavaScript?");
let answer = "ECMAScript";
if (input !== answer) {
  alert("You don't know? “ECMAScript”!");
} else {
  alert("Right!");
}

let number = prompt("Input a number");
if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}

let result = (a + b < 4) ? "Below" : "Over";

let message;

message = (login === "Employee") ? "Hello" :
          (login === "Director") ? "Greetings" :
          (login === "") ? "No login" :
          "";
