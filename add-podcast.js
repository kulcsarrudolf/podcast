const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const podcastName = args[0];
const podcastUrl = args[1];
const podcastLang = args[2];

function insertPodcast(filePath, section, newPodcast) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    const lines = data.split("\n");
    const sectionStartRegex = new RegExp(`^${section}$`);
    let sectionStartIndex = lines.findIndex((line) =>
      sectionStartRegex.test(line)
    );
    let sectionEndIndex = lines.findIndex(
      (line, index) => index > sectionStartIndex && /^## /.test(line)
    );

    if (sectionEndIndex === -1) sectionEndIndex = lines.length;
    const podcastsStartIndex = lines.findIndex(
      (line, index) =>
        index > sectionStartIndex && line.trim().startsWith("|  #  |")
    );
    const beforePodcasts = lines.slice(
      sectionStartIndex,
      podcastsStartIndex + 2
    );
    const afterPodcasts = lines.slice(podcastsStartIndex + 2, sectionEndIndex);
    afterPodcasts.push(newPodcast);

    const updatedPodcasts = afterPodcasts.map((line, index) => {
      if (line.includes("|")) {
        return `|  ${index + 1}  | ${line.split("|").slice(2).join("|")}`;
      }
      return line;
    });

    lines.splice(
      sectionStartIndex + beforePodcasts.length,
      afterPodcasts.length,
      ...updatedPodcasts
    );
    const updatedContent = lines.join("\n");

    fs.writeFile(filePath, updatedContent, "utf8", (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log("Podcast inserted successfully!");
    });
  });
}

const filePath = path.join(__dirname, "README.md");
const section = "## My favorites";
const newPodcast = `|  0  | ${podcastName} | ${podcastLang} | ${podcastUrl} |`;

insertPodcast(filePath, section, newPodcast);
