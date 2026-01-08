const regularuser = {
    email: "srinivas@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Srinivas",
            lastname: "Reddy"
        },
        customerfullname:{
            firstname: "Mahitha",
            lastname: "Reddy"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}
// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);
// Methods of objects 
const tinderUser ={
    id: "123abc",
    name: "Srinivas Reddy",
    isLoggedIn: true
}
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("name"));
