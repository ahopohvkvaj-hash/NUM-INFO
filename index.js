const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.get("/", async (req, res) => {
  const reg = req.query.reg;

  if (!reg) {
    return res.json({
      error: "reg parameter missing",
      developer: "@veerxxhelper"
    });
  }

  try {
    const realApi = `https://jai-mahakaal.vercel.app/vehicle-api?reg=${reg}`;

    const response = await fetch(realApi);
    const data = await response.json();

    // Filtered custom response
    const finalResponse = {
      reg_no: data.reg_no || reg,
      mobile_no: data.mobile_no || "not_found",
      developer: "@veerxxhelper"
    };

    res.json(finalResponse);

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
