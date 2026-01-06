const mysym = Symbol("key01")

const userDetails = {
    name : "Siri",//it consider name as string here our passed value is also a string
    "full name": "Siri Chandana",
    age : 19,
    email : "siri@gmail.com",
    [mysym]: "mykey",//syntax of representing a symbol
    location : "Guntur"
}
console.log(userDetails.email);//regular method, we can't write full name in this method..we should defintly use 2nd method 
console.log(userDetails["email"]);
console.log(userDetails[mysym]);

userDetails.name = "Chandana"
Object.freeze(userDetails)//freeze the object so that we cannot change that
userDetails.name = "Srinivas"
console.log(userDetails);

