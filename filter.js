/* filter() */


const firstName = ["Oluwatosin", "Faith", "Ogungbaye"];
const filteredNames = firstName.filter(name => name === "Ogungbaye");
console.log(filteredNames);



const interests = ["I love vlogging", "Reading", "and playing the guitar"];
const filteredInterests = interests.filter(interest => interest.includes("guitar"));
console.log(filteredInterests);



const subjects = ['History', 'Social Studies', 'Mathematics'];
const filteredSubjects = subjects.filter(subject => subject.length > 7);
console.log(filteredSubjects); 
