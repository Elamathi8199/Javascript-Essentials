//  Search for a particular character in a string
let str1="Upgraders";
let ind1=str1.indexOf("s");
if( ind1 >= 0){
    console.log("The character is found at index " + ind1 );
}else{
    console.log("The character is not found");
}
console.log("\n");

// Convert minutes to seconds
let min = 30;
let sec = min * 60;
console.log(min +" minutes = "+ sec + " seconds");
console.log("\n");

// search for a element in a array of strings
let fruits = ["apple","banana","grapes","guava","berries"];
let fruit="grapes"
let find = fruits.indexOf(fruit);
if(find >= 0){
    console.log("The element " + fruit + " is found at index " + find +" in the array");
}else{
    console.log("The element " + fruit + "is not in the array");
}
console.log("\n");

// Display only the elements containing 'a' in them from a array
console.log("The elements containing 'a' in the array are:");
fruits.forEach(function(ele){
    if(ele.indexOf("a")>=0){
        console.log(ele)
    }
})
console.log("\n");

// Print array in reverse order
console.log("The reversed array is: \n" + fruits.reverse());
