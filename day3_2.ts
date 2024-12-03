const data = await Deno.readTextFile("day3_data.txt");
const cleanedData = data.matchAll(
  /(do\(\))|(don't\(\))|(mul\()(\d+)(,)(\d+)(\))/g
);

let disabled = false;

console.log(
  cleanedData.reduce((acc, curr) => {
    if (curr[0] === "don't()") {
      disabled = true;
      return acc;
    } else if (curr[0] === "do()") {
      disabled = false;
      return acc;
    }

    if (disabled === false) {
      return acc + Number(curr[4]) * Number(curr[6]);
    }

    return acc;
  }, 0)
);
