const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

// ROUTES:
const getRoute = require("./routes/get");
const postRoute = require("./routes/post");

// MIDDLEWARES
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use("/", getRoute);
app.use("/", postRoute);

// DB CONNECTION
mongoose.connect(process.env.MONGODB_URI, (err) =>
  err ? console.log(err) : console.log("DB Connected")
);


// SERVER

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname,"../client/build")))
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

app.listen(process.env.PORT || 3002, () => console.log("Server Spinning"));
