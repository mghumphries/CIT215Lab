//Task One : Variables
//Part A -Displaying Input Number
console.log("Task One");
let number = parseInt(prompt("Please enter a number: "));
console.log(number)

var numQuantity = document.querySelector(".quantity");
numQuantity.innerText = "Quantity: " + number;
console.log("User's input = "+ number);

//Part B -Displaying Percentage
let percentage = parseInt(prompt("Please enter a percentage: "));
let percentCalc = `${percentage / 100}` * `${number}`;

var percentChosen = document.querySelector(".task1a");
percentChosen.innerText = `${percentage}` + "% of Quantity, " +`${number}`+ " is " + `${percentCalc}`;


//Task Two : Variables & Conditionals
let point = parseInt(prompt("Please enter the amount of points you received: "));

//if branch
//a
if (point >= 91){
    let grade = "A";
        let task2a = document.querySelector(".task2a");
        task2a.innerText = `Your grade is ${grade}`;
    }
else if (point >= 81) {
    let grade = "B";
        let task2a = document.querySelector(".task2a");
        task2a.innerText = `Your grade is ${grade}`;
    }
else if (point >= 71) {
    let grade = "C";
        let task2a = document.querySelector(".task2a");
        task2a.innerText = `Your grade is ${grade}`;
    }
else if (point >= 61) {
    let grade = "D";
        let task2a = document.querySelector(".task2a");
        task2a.innerText = `Your grade is ${grade}`;
    }
else if (point >= 0) {
    let grade = "F" ;
        let task2a = document.querySelector(".task2a");
        task2a.innerText = `Your grade is ${grade}`;
    };
//swtich
let displayGradePB = "";
switch (point < 101 && point >= 0) {
    case (point <= 100 && point >= 91):
        strLetterPB = "A";
        break;
    case (point <= 90 && point >= 81):
        strLetterPB = "B";
        break;
    case (point <= 80 && point >= 71):
        strLetterPB = "C";
        break;
    case (point <= 70 && point >= 61):
        strLetterPB = "D";
        break;
    case (point <= 60 && point >= 0):
        strLetterPB = "F";
        break;
    default:
        strLetterPB = "Please enter a valid number";   
}
displayGradePB += "Your grade is " + `${strLetterPB}`;
let task2b = document.querySelector(".task2b");
task2b.innerText = `${displayGradePB}`;

//Task 3 : Variables and Loops
let profName = (prompt("*FOR LOOP* Which professor from Harry Potter do you wish to hear a line from?"));
let lineToWrite = (prompt("*FOR LOOP* Enter the line you would like this professor to say: "));
let numOfLines = parseInt(prompt("*FOR LOOP* How many times would you like it written? "));

// for loop
let totalLines = "";
for (let line = 1; line <= numOfLines; line++){
    totalLines += line + ". " + " " + lineToWrite;
}
let RefprofName = document.querySelector(".prof");
RefprofName.innerText = `Prof.${profName}`;

let ReftotalLines = document.querySelector(".hpProfLines");
ReftotalLines.innerText = `${totalLines}`;

console.log (`${lineToWrite}`);

function task3() {
    //Task 3: Variables & Loops
    let PName = prompt("*FOR LOOP* Which professor from Harry Potter do you wish to hear a line from? ");
    let wLine = prompt("*FOR LOOP* Enter the line you would like this professor to say: ");
    let NumLines = prompt("*FOR LOOP* How many times would you like it written? ");
    NumLines = parseInt(NumLines);

    for (let num = 1; num <= NumLines; num++) {
            console.log(`${num}: ${wLine}`);
        }  
    let RefprofName = document.querySelector(".prof");
    RefprofName.innerText = `Professor.${profName}`;    

    let RefhpProfLines1 = document.querySelector(".hpProfLines");
    RefhpProfLines1.innerText = `Check the console logs for your lines Prof. ${PName}`;
};

//Task 4 : Variables, Loops, DOM
let PName2 = prompt("*WHILE LOOP* Which professor from Harry Potter do you wish to hear a line from?");
let wLine2 = prompt("*WHILE LOOP* Enter the line you would like this professor to say: ");
let numLines2 = parseInt(prompt("*WHILE LOOP* How many times would you like it written? "));

//while loop
let textLines = "";
let lines = 1;

while (lines <= numLines2){
    textLines += lines + "." + "" + wLine2 ;
    lines++;
}
let Refprofessor2 = document.querySelector(".prof2");
Refprofessor2.innerText = `Professor.${PName2}`;
let RefhpProfLines2 = document.querySelector(".hpProfLines2");
RefhpProfLines2.innerText = textLines;

 //Task 5: Variables, Loops, DOM, Function
function task5() {
   
    let PName3 = prompt("Which professor from Harry Potter do you wish to hear a line from? ");
    let WLine3 = prompt("Enter the line you would like this professor to say: ");
    let NumLines3 = prompt("How many times would you like it written? ");
    NumLines3 = parseInt(NumLines3);
    let task5Str = "<ul>";


    const WrittenLines = (NumLines3, WLine3) => {
        let num = 1;

        while (num <= NumLines3) {
            task5Str += `<li> ${num}: ${WLine3}`;
            console.log(`${num}: ${WLine3}`); 
            num ++ ;
        }; 
        return (task5Str);
    };

    WrittenLines(NumLines3, WLine3);
    task5Str += '</ul>';
    let task5 = document.querySelector(".task5");
    task5.innerHTML = `Here are your lines Prof. ${PName3}`;
};

// Task 6 : Variables, Loops, Functions
//first strategy
let product = 0
let timeStr1 =" "

for (let times= 1; times <=12; times++){
    for (let factor = 1; factor <= 12; factor++){
       product = times * factor;
       timeStr1 += times + "x" + factor + "=" + product + "<br>";
    }
    timeStr1 += "-----<br>";

    let result1 = document.querySelector(".task6a");
    result1.innerHTML = timeStr1;
}

//second strategy
let displayStr = "";
const createTable = (timesNum) =>{
    let timeStr ="";
    for (let factor = 1; factor <= 12; factor++){
        let product = factor*timesNum;
        timeStr += timesNum + "x" + factor + "=" + product + "<br>"
    }
return timeStr;
}

for (let timesTab= 1; timesTab <=12; timesTab++){
    let temp = createTable(timesTab);
    displayStr += temp + "...<br>";
}

let result = document.querySelector(".task6b");
result.innerHTML = displayStr;

//third strategy
const times= (factor,delimiter) => {
    let timeStr2 = " ";

    for (let a = 1; a <= delimiter; a++){
        let product2 = factor * a;
        timeStr2 += (factor + "x" + a + "=" + product2 + "<br>");
    }
    timeStr2 += "....<br>"
return timeStr2;
};

const table = function(delimiter){
    let tableStr = " ";
    for (let b= 1; b<= delimiter; b++) {
        tableStr += times(b, delimiter);
    }
    return tableStr;
}
let result3 = document.querySelector(".task6c");
let finalStr =" ";

delimiter = 12;
finalStr += table(delimiter);
result3.innerHTML = `${finalStr}`;


// Task 7: Hoisting

/*

    Explanation 
        a: As a function, hoisting is where you use a function before the function is declaired and it works.
        b: As a variable, hoisting is where you use a variable before it has been declaired. This results in the values being "Undefined".
    
    Coded Examples
        a - function: 
        HelloWorld();

        function HelloWorld() {
            console.log(`Hello World!!`)
        }

        b - variable:
        console.log(HelloProf)

        var HelloProf = `Hello Profesor!`

    C:
        The variable "var" allows hoisting by using function scope (allowing access throughout the entire doc) and by allowing you to redeclare 
    the "var" within the same scope.
    
        The variable "let" does not allow hoisting by using the block scope (allowing access only within the same block i.e. if or loop functions).
    The "let" variable does not allow redeclaration, doing so results in a syntax error. 
*/