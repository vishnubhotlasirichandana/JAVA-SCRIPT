const myArr = [10,20,30,40,50,60]
const myArr2 = new Array(01, 07, 2005, 10, 04, 2006)
console.log(myArr[1]);
console.log(myArr2[1]);

//Array methods
myArr.push(70)//added a number at last of the array
console.log(myArr);

myArr2.pop()//it deletes the number from the last of the string 
console.log(myArr2);

myArr.unshift(9)//which adds the value at beginning 
console.log(myArr);

myArr.shift()//it delete the element in beginning
console.log(myArr);

console.log(myArr.includes(9));//shows that provided value is available or not in the array in boolean type

console.log(myArr.indexOf(10));//returns index value of the provided number

const newArr =  myArr.join()//convert the array into the string 
console.log(myArr);
console.log(newArr);

console.log("A", myArr);//A [
//   10, 20, 30, 40,
//   50, 60, 70
// ]

const myn1 = myArr.slice(1,3)//[ 20, 30 ]
// B [
//   10, 20, 30, 40,
//   50, 60, 70
// ]
console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1,3)
console.log(myn2);//[ 20, 30, 40 ]
console.log("C", myArr);//C [ 10, 50, 60, 70 ]













