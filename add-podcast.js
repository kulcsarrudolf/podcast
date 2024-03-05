const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const insertPosition = parseInt(args[0], 10);
const podcastName = args[1];
const podcastUrl = args[2];
const podcastLang = args[3];

function updatePodcastList(
  filePath,
  sectionTitle,
  newPosition,
  podcastName,
  podcastUrl,
  podcastLang
) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    let lines = data.split("\n");
    const sectionStart = lines.findIndex(
      (line) => line.trim() === sectionTitle
    );
    const sectionEnd = lines.findIndex(
      (line, index) => index > sectionStart && line.trim().startsWith("## ")
    );

    let podcastLinesStartIndex =
      lines.findIndex(
        (line, index) =>
          index > sectionStart && line.trim().startsWith("|  #  |")
      ) + 2;
    let podcastLinesEndIndex = sectionEnd > -1 ? sectionEnd : lines.length;

    let podcasts = lines.slice(podcastLinesStartIndex, podcastLinesEndIndex);

    podcasts.splice(
      newPosition - 1,
      0,
      `|     | ${podcastName} | ${podcastLang} | ${podcastUrl} |`
    );

    podcasts = podcasts.map((line, index) => {
      if (line.startsWith("|")) {
        const parts = line.split("|");
        parts[1] = `  ${index + 1}  `;
        return parts.join("|");
      }
      return line;
    });

    lines.splice(
      podcastLinesStartIndex,
      podcastLinesEndIndex - podcastLinesStartIndex,
      ...podcasts
    );

    const updatedContent = lines.join("\n");

    fs.writeFile(filePath, updatedContent, "utf8", (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log("Podcast inserted successfully and numbering updated.");
    });
  });
}

const filePath = path.join(__dirname, "README.md");
const section = "## My favorites";

updatePodcastList(
  filePath,
  section,
  insertPosition,
  podcastName,
  podcastUrl,
  podcastLang
);
