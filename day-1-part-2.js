const input = await fetch("https://adventofcode.com/2024/day/1/input").then(
  (e) => e.text()
);

// Array of pairs, unsorted
const source = input
  .split("\n")
  .filter((e) => e)
  .map((e) => e.split("   "));

// Sorted array of column 1 ids
const col1 = source.map((e) => parseInt(e[0], 10)).sort();

// Sorted array of column 2 ids
const col2 = source.map((e) => parseInt(e[1], 10)).sort();

let similarity = 0;

col1.forEach((id) => {
  const clonesCount = col2.filter((e) => e === id).length;
  similarity += id * clonesCount;
});

console.log(similarity);
