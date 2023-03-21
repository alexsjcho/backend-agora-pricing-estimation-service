const calculateRTCPrice = require("../rtcEstimations/calculations/calculateRTCPrice");
const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!", calculateRTCPrice("480p", 4, 0, 60, "conference"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
