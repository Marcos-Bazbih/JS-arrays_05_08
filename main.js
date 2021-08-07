// *******************_1_**********************
// var ages = [20,3,18,75,3,11];

// var minAge = ages[0];
// for(var i=1; i<ages.length; i++){
//     if(ages[i] < minAge){
//         minAge = ages[i];
//     }
// }
// console.log(minAge);


// var maxAge = ages[0];
// for(var i=1; i<ages.length; i++){
//     if(ages[i] > maxAge){
//         maxAge = ages[i];
//     }
// }
// console.log(maxAge);


// var sum=0;

// for(var i=0; i< ages.length; i++){
//     sum = sum + ages[i];
// }
// console.log(sum);


// var avg = sum / ages.length;
// console.log(avg);


// var userNum = Number(prompt("enter number"));
// for(var i=0; i< ages.length; i++){
//     if(userNum == ages[i]){
//         console.log("good job");
//     }
// }

// var total =1;

// for(var i=0; i< ages.length; i++){
//     total =total *ages[i]
// }
// console.log(total);


// for(var i=0; i< ages.length; i++){
//     for(var j=0; j<10; j++){
//     console.log(ages[i]);
//     }
// }


// var numbers =[];
// for(var i=0; i<5;i++){
//     var userInput = Number(prompt("enter number"));
//     numbers.push(userInput);
// }
// console.log(numbers);


// var sum=0;
// for(var i=0;i<numbers.length;i++){
//     sum=sum + numbers[i];
// }
// console.log(sum);
// *******************_1_**********************



// *******************_2_**********************
// var numAndletters = [5, "a", 10, "b", 20];

// var firstNumOnly = [1,2,3,4,5];
// var firstLettersOnly = ["a","b","c","d","e"];

// var secondNumOnly = [1,2,3,4,5];
// var secondLettersOnly = ["a","b","c","d","e"];
// *******************_2_**********************



// *******************_3_**********************
// var numArray = [10,20,30,40,50];
// var firstNum = numArray[0];
// var lastNum = numArray[4];

// numArray[0] = numArray[1];
// numArray[1] = firstNum;
// numArray[4] = numArray[0];
// numArray[0] = lastNum;

// console.log(numArray);
// *******************_3_**********************



// *******************_4_**********************
// var numArrays = [5,3,7,8,11];
// var sum = 0;
// for(var i=0;i< numArrays.length;i++){
//     sum = sum + numArrays[i];
// }
// console.log(sum);


// var avg =0;
// for(var i=0; i<numArrays.length;i++){
//     avg= sum / numArrays.length;
// }
// console.log(avg);
// *******************_4_**********************



// *******************_5_**********************
// var names = ["a","b","c","d","e"];
// for(var i=0; i<names.length;i++){
//     console.log(names[i]);
// }
// *******************_5_**********************



// *******************_6_**********************
// var userNames = [];
// for(var i=0;i<5;i++){
//     var userInputName = prompt("enter a name");
//     userNames.push(userInputName);
// }
// console.log(userNames);
// *******************_6_**********************


// *******************_7_**********************
// var nameArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
// var userInput = prompt("enter a name");
// for(var i=0; i<nameArray.length;i++){
//     if(userInput == nameArray[i]){
//         console.log("nice");
//     }
// }
// *******************_7_**********************


// *******************_8_**********************
// var array = [];
// for(var i=0; i<3;i++){
//     var inputName = Number(prompt("enter a number"));
//     if(inputName){
//     array.push(inputName);
//     }
// }
// console.log(array);

// var total=1;
// for(var i=0;i<array.length;i++){
//     total=total*array[i];
// }
// console.log(total);

// var sum=0;
// for(var i=0;i<array.length;i++){
//     sum=sum+array[i];
// }
// console.log(sum);

// for(var i=0; i<array.length;i++){
//     if(array[i]%2 == 0){
//         console.log(`${array[i]} nice`);
//     }
//     else if(array[i]%2 != 0){
//         console.log(`${array[i]} bad`);
//     }
// }
// *******************_8_**********************


// *******************_9_**********************
// var num;
// for(var i=1; i<=10; i++){
//     for(var j=1; j<=10; j++){
//         num=i*j;
//         console.log(`${i} * ${j} = ${num}`);
//     }
// }
// *******************_9_**********************


// *******************_10_**********************
// var numArrayUserNames = ["marcos", "lior", "haim", "matan"];
// var numArrayUserNum = [];
// for(var i =0;i<10;i++){
//     var userNumber = Number(prompt("enter number"));
//     numArrayUserNum.push(userNumber);
// }
// for(var i=0; i<numArrayUserNum.length;i++){
//     console.log(numArrayUserNames);
// }
// *******************_10_**********************


// *******************_11_**********************
// for(var i=1; i<=100;i++){
//     if(i%7!=0){
//     console.log(i);
//     }
//     else if(i%7==0){
//         console.log("boom");
//     }
// }
// *******************_11_**********************