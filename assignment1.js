// --------------Question 1----------------
function computeSeleCommission(salary, sales) {
    let percent = 0;
    //If the salesman is salaried 

    if (salary > 0) {
        if (sales < 300) {
            percent = 0;
        } else if (sales >= 300 && sales <= 500) {
            percent = 0.01;
        } else {
            percent = 0.02;
        }
    }
    // If the salesman is not salaried 
    else {
        if (sales >= 300 && sales <= 500) {
            percent = 0.02;
        } else if (sales > 500) {
            percent = 0.03;
        }
    }

    let commission = sales * percent;
    return commission;
}
//test
console.log(computeSeleCommission(0, 501));

// -----------------Question 2------------
//While loop
let prompt = require('prompt-sync')();
let age = prompt('Enter the age? ');
while (age <= 18) {
    age = prompt('Enter the age? ');
}
console.log('You enter age older than 18: ' + age);
//do While 
let prompt = require('prompt-sync')();
let age = prompt('Enter the age? ');
do {
    age = prompt('Enter the age? ');
}
while (age <= 18);
console.log('You enter age older than 18: ' + age);

// ----------------Question 3----------------
let prompt = require('prompt-sync')();
let initialAmount = prompt('Enter the initial amount: ');
let annualInterestRate = prompt('Enter the annual interest rate: ');
let numberOfYears = prompt('Enter the number of years to compound: ');
//A = p(1+r/n)^nt
let balance = initialAmount * Math.pow(1 + (annualInterestRate / 12), 12 * numberOfYears);
console.log('Balance: ' + balance);

// ------------------Question 4/1--------------
let n = 5; 
let string = "";

for(let i = 1; i <= n; i++) { 
  for(let j = 1; j <= n; j++) { 
    string += j;
  }
  string += "\n";
}
console.log(string);
// -------------------Question 4/2---------------
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += i;
  }
  string += "\n";
}
string += "\n";
for (let i = n; i >=  1; i--) {
  for (let j = i; j > 0; j--) {
    string += i;
  }
  string += "\n";
}
console.log(string);

//------------------ Question 5---------------------
let prompt = require('prompt-sync')();
let cost = prompt('Enter the Cost of House: ');
let downPayment = 0;
if(cost < 50000){
    downPayment = cost*0.05;
}
else if (cost >= 50000 && cost < 10000){
    downPayment = 1000 + (0.1*(cost-50000));
}
else if (cost >= 100000 && cost < 200000){
    downPayment = 2000 + (0.15*(cost-100000));
} 
else if (cost >= 200000){
    downPayment = 5000 + (0.1*(cost-200000));
} 
console.log('Down Payment: ' + downPayment);
// --------------------Question 6--------------------
function sumOfDigits(num){
    let sum = 0;
    while(num != 0){
        sum  += num%10;
        num = Math.floor(num/10);
    }
    console.log('The sum of the digit '+ num + ' is ' + sum );
}
//test
sumOfDigits(1234)// 10