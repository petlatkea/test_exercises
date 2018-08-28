const fullName = "Peter Heronimous Lind";

// get parts of the full name
const firstNameEnds = fullName.indexOf(" ");
const firstName = fullName.substring(0, firstNameEnds);

const lastNameStarts = fullName.lastIndexOf(" ") + 1;
const lastName = fullName.substring(lastNameStarts);

const middleName = fullName.substring(firstNameEnds + 1, lastNameStarts - 1);

console.log(firstName);
console.log(middleName);
console.log(lastName);
