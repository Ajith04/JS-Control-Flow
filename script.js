// let age=24;

// if (age > 18)
// {
//     console.log("You are elegible to vote");
// }

// let num=27;
// let remainder = (num%2);

// if (remainder = 1)
// {
//     console.log("The "+ num +" is odd");
// }
// else {
//     console.log("The "+ num +" is even");
// }

// let num1 = 10, num2 = 2;
// if (num1 > num2)
// {
//     console.log(num1 + " is larger than " + num2);
// }
// else
// {
//     console.log(num2 + " is larger than " + num1);
// }

// let year = 2024;
// let div4 = (year%4), div100 = (year%100), div400 = (year%400);

// if ((div4==0 && div400==0) || div100!=0)
// {
//     console.log(year + " is leap year");
// }

// let alphabet = "a"

// switch (alphabet)
// {
//     case "a":
//         console.log(alphabet + " is a vowel");
//     break;
//     case "e":
//         console.log(alphabet + " is a vowel");
//     break;
//     case "i":
//         console.log(alphabet + " is a vowel");
//     break;
//     case "o":
//         console.log(alphabet + " is a vowel");
//     break;
//     case "u":
//         console.log(alphabet + " is a vowel");
//     break;
//     default:
//         console.log(alphabet + " is a consonant");
// }


// let num = 0;
// for (let i=1; i<=10; i++)
// {
//     num+=i;
// }

// console.log(`The first 10 number's sum is ${num}`);


let n = 5; 
for (let i = 1; i <= n; i++) { 
	let str = "*"; 
	let space = ' '; 
	console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
} 
for (let i = n - 1; i >= 1; i--) { 
	let str = "*"; 
	let space = ' '; 
	console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
}

