/* map() */


const firstName = ["Oluwatosin", "Faith", "Ogungbaye"];
const mappedNames = firstName.map(name => name.length);
console.log(mappedNames); 



const interests = ["I love vlogging", "Reading", "and playing the guitar"];
const mappedInterests = interests.map(interest => interest.toUpperCase());
console.log(mappedInterests); 



const subjects = ['History', 'Social Studies', 'Mathematics'];
const mappedSubjects = subjects.map(subject => subject.slice(0, 4));
console.log(mappedSubjects); 