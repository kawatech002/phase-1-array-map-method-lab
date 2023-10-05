const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }
function titleCased() {
  // Create a new array to store the title case tutorial names.
  const titleCasedTutorials = [];

  // Iterate through the tutorials array.
  for (const tutorial of tutorials) {
    // Create a new string to store the title case tutorial name.
    let titleCasedTutorial = "";

    // Iterate through the words in the tutorial title.
    for (const word of tutorial.split(" ")) {
      // Capitalize the first letter of the word.
      titleCasedTutorial += word.charAt(0).toUpperCase() + word.slice(1);

      // Add a space after the word.
      titleCasedTutorial += " ";
    }

    // Remove the extra space at the end of the title.
    titleCasedTutorial = titleCasedTutorial.trim();

    // Add the title case tutorial name to the new array.
    titleCasedTutorials.push(titleCasedTutorial);
  }

  // Return the new array of title case tutorial names.
  return titleCasedTutorials;
}