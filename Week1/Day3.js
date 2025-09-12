let age = 17;
console.log("  if/else block")
if(age>=18){
    console.log("You Can Vote")
}
else{
    console.log("U can't vote")
}
console.log("=================")
console.log("   Else if block")
let marks = 85;
if(marks>=90){
    console.log("Your's grade is A+")
}
else if(marks>=80){
    console.log("Your's grade is A")
}
else if(marks>=70){
    console.log("Your's grade is B")
}
else{
    console.log("You FAIL")
}
console.log("=================")
console.log("   Switch block")
let day= "Wednesday";
switch(day){
    case "Monday":
        console.log("It's just starting of the week");
        break;
    case "Friday":
        console.log("Weekend is near");
        break;
    case "Saturday":
        console.log("It's Weekendddddd")
        break;
    default:
    console.log("Just An Another Day")
}