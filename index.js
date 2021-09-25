const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
