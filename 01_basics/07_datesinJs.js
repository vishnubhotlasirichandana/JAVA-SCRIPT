let myDate = new Date()
console.log(typeof myDate);
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

let myCreatedDate = new Date(2006, 3, 10);//here month starts from 0(0-jan,1-feb,2-march,3-april)
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()//we get time in milliseconds 
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());//used for comparing the time mainly used in hostel booking web application 
console.log(Date.now()/1000);//to convert milliseconds into seconds 
console.log(Math.floor(Date.now()/1000));//to avoid decimal values when we convert it into seconds 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());//there are many methods to extract particular part from the time or date 







