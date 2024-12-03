const data = await Deno.readTextFile("day3_data.txt");
const cleanedData = data.matchAll(/(mul\()(\d+)(,)(\d+)(\))/g);

console.log(
  cleanedData.reduce((acc, curr) => acc + Number(curr[2]) * Number(curr[4]), 0)
);
