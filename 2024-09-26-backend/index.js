import { readFile } from "fs/promises";
import express from "express";

const app = express();

async function processFile() {
  try {
    const text = await readFile("database.txt", "utf-8");
    const data = text.split(/\r?\n/);
    const technika = "Už techniką laimėjo:";
    const artistiskuma = "Už artistiškumą laimėjo:";
    const couple = "Petras ir Rasa";
    const couple1 = "Rita ir Jurgis";
    const couple2 = "Rasa ir Linas";

    const line2 = data[2].split(" ").map(Number);
    const line3 = data[3].split(" ").map(Number);
    const line5 = data[5].split(" ").map(Number);
    const line6 = data[6].split(" ").map(Number);
    const line8 = data[8].split(" ").map(Number);
    const line9 = data[9].split(" ").map(Number);

    let sum = 0;
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;
    let sum5 = 0;

    for (let i = 0; i < line2.length; i++) {
      sum += line2[i];
    }
    for (let i = 0; i < line3.length; i++) {
      sum1 += line3[i];
    }
    for (let i = 0; i < line5.length; i++) {
      sum2 += line5[i];
    }
    for (let i = 0; i < line6.length; i++) {
      sum3 += line6[i];
    }
    for (let i = 0; i < line8.length; i++) {
      sum4 += line8[i];
    }
    for (let i = 0; i < line9.length; i++) {
      sum5 += line9[i];
    }

    for (let i = 1; i < data.length; i++) {
      if (i === 2) {
        console.log(`${data[i]} Balai už techniką (Taškai: ${sum})`);
      } else if (i === 3) {
        console.log(`${data[i]} Balai už artistiškumą (Taškai: ${sum1})`);
      } else if (i === 5) {
        console.log(`${data[i]} Balai už techniką (Taškai: ${sum2})`);
      } else if (i === 6) {
        console.log(`${data[i]} Balai už artistiškumą (Taškai: ${sum3})`);
      } else if (i === 8) {
        console.log(`${data[i]} Balai už techniką (Taškai: ${sum4})`);
      } else if (i === 9) {
        console.log(`${data[i]} Balai už artistiškumą (Taškai: ${sum5})`);
        console.log(`${technika} ${couple2} su: ${sum4}`);
        console.log(`${artistiskuma} ${couple2} su: ${sum5}`);
      } else {
        console.log(data[i]);
      }
    }
  } catch (error) {
    console.error("Error reading the file:", error);
  }
}

processFile();

app.get("/", (req, res) => {
  res.send("");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
