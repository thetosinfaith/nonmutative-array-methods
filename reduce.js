/* reduces() */

const firstName = ["Oluwatosin", "Faith", "Ogungbaye"];
const firstNameLast = firstName.reduce((acc, curr) => curr === "Ogungbaye" ? firstName.indexOf(curr) : acc, -1);
console.log(firstNameLast); 



const interests = ["I love vlogging", "Reading", "and playing the guitar"];
const interestsLast = interests.reduce((acc, curr) => curr === "and playing the guitar" ? interests.indexOf(curr) : acc, -1);
console.log(interestsLast); 



const subjects = ['History', 'Social Studies', 'Mathematics'];
const subjectsLast = subjects.reduce((acc, curr) => curr === 'Mathematics' ? subjects.indexOf(curr) : acc, -1);
console.log(subjectsLast);
