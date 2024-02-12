function groupAndSortLetters(words) {
  const combinedString = words.join("").toLowerCase();

  const frequency = {};
  for (let char of combinedString) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  const sortedLetters = Object.entries(frequency)
    .sort((a, b) => {
      if (b[1] === a[1]) {
        return a[0].localeCompare(b[0]);
      }
      return b[1] - a[1];
    })
    .map((entry) => entry[0])
    .join("");

  return sortedLetters;
}

const kalimat = ["Pendanaan", "Terproteksi", "Untuk", "Dampak", "Berarti"];
const output = groupAndSortLetters(kalimat);
console.log("\nInput:", kalimat);
console.log("Expected Output:", output);
