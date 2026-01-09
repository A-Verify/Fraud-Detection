import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json"; // file to track commit dates
const git = simpleGit();

const makeCommits = async (n) => {
  if (n <= 0) {
    console.log("All commits done!");
    await git.push("origin", "main");
    return;
  }

  const x = random.int(0, 52); // random week
  const y = random.int(0, 6);  // random day
  const date = moment().subtract(1, "y").add(x, "weeks").add(y, "days").format();

  const data = { date };
  jsonfile.writeFileSync(path, data);

  await git.add([path]);
  await git.commit(`Retro commit for ${date}`, { "--date": date });

  console.log(`Committed for ${date} (${n} left)`);

  makeCommits(n - 1);
};

makeCommits(100); // change 100 to however many commits you want
