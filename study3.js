//REST PARAMETER IN FUCNTION'S PARAMETER LIST

//WHEN FUNCTION CALL HAS MORE ARGUMENTS THAN FUNCTION'S PARAMETER
function muppetLab(a,b){
    console.log(a,b); // LOG: Dr. Bunson Beaker
}
  
muppetLab("Dr. Bunson", "Beaker", "Miss Piggy", "Kermit", "Animal");


//REST PARAMETER CAPTURES THE LEFTOVER ARGUMENTS
function muppetLab2(a, b, ...muppets) {
    console.log(a, ' ', b); // LOG: Dr. Bunson Beaker
  
    console.log(muppets); // LOG: ["Miss Piggy", "Kermit", "Animal"]
    console.log(muppets[0]); // LOG: Miss Piggy
    console.log(muppets.length); // LOG: 3
}
  
muppetLab2("Dr. Bunson", "Beaker", "Miss Piggy", "Kermit", "Animal");

