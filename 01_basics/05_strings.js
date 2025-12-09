const name = "siri"
const repoCount = 10
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const seriesName = new String("GameOver")
console.log(seriesName.charAt(3))
console.log(seriesName.indexOf('O'))
const newString = seriesName.substring(0,3) //minus values will be neglagable in substring 
console.log(newString)
const anotherString = seriesName.slice(-9,5) //minus values can be consider in the slice 
console.log(anotherString)
const newStringOne = "       Siri.      "
console.log(newStringOne)
console.log(newStringOne.trim())//it will remove the extra spaces 
const url = "http://siri.com/siri%20vishnubhotla"
console.log(url.replace("siri", "chandana"));
