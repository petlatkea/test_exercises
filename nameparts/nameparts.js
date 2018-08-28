const fullName = "Peter Heronimous Lind";

// get parts of the full name
const firstNameEnds = fullName.indexOf(" ");
const firstName = fullName.substring(0, firstNameEnds);

const lastNameStarts = fullName.lastIndexOf(" ");
const lastName = fullName.substring(lastNameStarts);

const middleName = fullName.substring(firstNameEnds, lastNameStarts);

console.log(firstName);
console.log(middleName);
console.log(lastName);
