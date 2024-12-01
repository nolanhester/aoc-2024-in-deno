const locationIdsRaw = await Deno.readTextFile("day1_data.txt");

const locationIdPairs = locationIdsRaw.split("\n").map((p) => p.split("   "));

const leftList = locationIdPairs.map((p) => Number(p[0])).sort((a, b) => a - b);

const rightList = locationIdPairs
  .map((p) => Number(p[1]))
  .sort((a, b) => a - b);

const result = leftList
  .map((left) => {
    const count = rightList.filter((right) => right === left).length;
    return left * count;
  })
  .reduce((prev, current) => prev + current);

console.log(result)
