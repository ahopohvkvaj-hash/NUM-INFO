const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.get("/", async (req, res) => {
  const number = req.query.number;

  if (!number) {
    return res.json({
      error: "number parameter missing",
      developer: "@veerxxhelper"
    });
  }

  try {
    const realApi = `https://meowmeow.rf.gd/gand/intelxgroup.php?number=${number}`;

    const response = await fetch(realApi);
    let data = await response.text();

    // 🔥 UPDATED username replace
    data = data.replace(/@frappeash/gi, "@veerxxhelper");

    res.setHeader("Content-Type", "application/json");
    res.send(data);

  } catch (err) {
    res.json({
      error: "API fetch failed",
      developer: "@veerxxhelper"
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Proxy API running");
});
