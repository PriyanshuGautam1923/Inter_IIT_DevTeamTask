const fs = require("fs");

const express = require("express");
const { MeiliSearch } = require("meilisearch");

const app = express();
const client = new MeiliSearch({ host: "http://meilisearch:7700" });
let linkDocument;
let links;

var newData;
fs.readFile("./saved_links.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    ({ links } = JSON.parse(jsonString));
    links = links.map((el, i) => {
      return { id: i, url: el };
    });
    newData = JSON.stringify(links);
    // console.log(links);
    fs.writeFile("data.json", newData, (err) => {
      // error checking
      if (err) throw err;
      linkDocument = require("./data.json");
      client
        .index("links")
        .addDocuments(linkDocument)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      console.log("New data added");
    });
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(__dirname));

app.post("/1", function (req, res) {
  const { text } = req.body;
  client
    .index("links")
    .search(text)
    .then((links) => res.send(JSON.stringify(links)));
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
