const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.get("/", async (req, res) => {
  const num = req.query.num;

  if (!num) {
    return res.json({
      error: "num parameter missing",
      user: "@veerxxhelper"
    });
  }

  try {
    // REAL API (hidden)
    const apiUrl = `https://jai-mahakaal.vercel.app/vehicle-api?reg=${num}`;

    const response = await fetch(apiUrl);
    let data = await response.text();

    // username replace
    data = data.replace(/pluggerpy/gi, "@veerxxhelper");

    // send modified response
    res.setHeader("Content-Type", "application/json");
    res.send(data);

  } catch (err) {
    res.json({
      error: "API fetch failed",
      user: "@veerxxhelper"
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Proxy API running");
});
