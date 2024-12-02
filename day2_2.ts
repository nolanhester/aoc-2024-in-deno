const data = await Deno.readTextFile("day2_data.txt");

const unique = (levels: Array<number>) =>
  new Set(levels).size === levels.length;

const increasing = (levels: Array<number>) =>
  levels.toSorted((a, b) => a - b).every((v, i) => v === levels[i]);

const decreasing = (levels: Array<number>) =>
  levels.toSorted((a, b) => b - a).every((v, i) => v === levels[i]);

const delta = (levels: Array<number>) =>
  levels
    .map((l, i) => {
      const next = levels.at(i + 1);

      if (next !== undefined) {
        const delta = Math.abs(l - next);
        return delta >= 1 && delta <= 3;
      } else {
        return true;
      }
    })
    .reduce((prev, current) => prev && current);

const reports = data
  .split("\n")
  .map((levels) => levels.split(" ").map((level) => Number(level)));

const dampLevels = reports.map((levels) =>
  levels.map((_, i1) => levels.filter((_, i2) => i1 !== i2))
);

console.log(dampLevels[0]);

const levelsCheck = dampLevels.map((levelPerms) =>
  levelPerms
    .map(
      (levels) =>
        (increasing(levels) || decreasing(levels)) &&
        unique(levels) &&
        delta(levels)
    )
    .reduce((a, b) => a || b)
);

console.log(levelsCheck.filter((c) => c).length);
