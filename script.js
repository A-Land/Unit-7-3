var age = prompt("How old are you ");
if(age >= 17){
  console.log("You can see an R movie alone.");
} else if(age >= 13){
  console.log("You can see a PG-13 movie alone.");
} else if(age >= 5){
  console.log("You can see a G or PG movie alone.");
} else {
  console.log("Uh. You're too young for most things.");
}
console.log("Thanks for verifying your age!");