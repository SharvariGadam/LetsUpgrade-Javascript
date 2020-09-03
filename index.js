
//QUESTION 1
//Program to search for a particular character in a string
console.log("QUESTION 1");
let name = "Lets upgrade javascript"
console.log("Character is at position:",name.indexOf("g"))



//QUESTION 2
//Program to convert minutes to seconds
console.log("\nQUESTION 2");
let min = prompt("Minutes::")
console.log(min, "Minutes " ," are equal to " , min*60, " seconds" )



//QUESTION 3
//Program to search for a element in a array of string
console.log("\nQUESTION 3");
let city = ["pune","mumbai","delhi","nagpur","banglore"]; 
console.log("Index of city is = ",city.indexOf("delhi"));



//QUESTION 4
//Program to display only elements containing 'a' in them from array
console.log("\nQUESTION 4");
console.log("Elements containing 'a' in them from array are:")
for(let i=0;i<city.length;i++){
	if(city[i].includes('a')){
		console.log(city[i])
	}
}	


//Question 5
//Print an array in reverse order
console.log("\nQUESTION 5");
let animals = ["dog","cat","zebra","monkey","lion"]
console.log("Original array: ",animals)
console.log("Reversed array is: ",animals.reverse());




