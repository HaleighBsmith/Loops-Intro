var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]
for(var i = 0; i < cohortOneStudents.length; i++){
    console.log(cohortOneStudents[i]);
}
let myInterests = ["Coding" , "Breweries" , "Travel" , "Camping" , "Reading"];
const myFavoriteInterest = myInterests[1];
for(var i = 0; i < myInterests.length; i++){
    if(myFavoriteInterest === myInterests[i]) {
        console.log(`My absolute favorite interest is ${myInterests[i]}.`); 
    } else { 
        console.log(`One of my interest is ${myInterests[i]}.`);
    }
    
}
