const nick_names = ["Siri", "Vissu", "lilly"]
const full_names = ["Chandana", "Bharadwaj", "Lalita"]

// nick_names.push(full_names)//push creates array inside a array
// console.log(nick_names);

const names = nick_names.concat(full_names)//concat makes the merging of two arrays 
// console.log(names);

const all_names = [...full_names, ...nick_names]//it is a spread methode, concate and spread works similar, but in concat we can add only 2 arrays, but in spread will can add n no.of arrays
// console.log(all_names);

const array = [1, 2, 3, [4, 5], 6, 7, [8, 9], 10 ]
const new_array = array.flat(Infinity)
console.log(new_array);

let score1 = 100;
let score2 = 200;
let score3 = 300
console.log(Array.of(score1, score2, score3));

