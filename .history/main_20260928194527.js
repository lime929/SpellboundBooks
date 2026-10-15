"use strict";

const express = require("express"),
  app = express(),
  layouts = require("express-ejs-layouts"),
  mongoose = require("mongoose"),
  errorController = require("./controllers/errorController"),
  homeController = require("./controllers/homeController"),
  catalogController = require("./controllers/catalogController"),
  authorsController = require("./controllers/authorsController"),
  communityController = require("./controllers/communityController"),
  questionsController = require("./controllers/questionsController");

mongoose.connect(
  "mongodb+srv://it231:October31@cluster-it231-final.ufr9s.mongodb.net/?appName=Cluster-it231-final"
);

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(layouts);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.locals.isHomePage = req.path === "/";
  next();
});

app.use((req, res, next) => {
  console.log(`Request made to: ${req.url}`);
  next();
});

// page routes
app.get("/", homeController.index);
app.get("/", homeController.showBooks2);
app.get("/catalog", catalogController.catalog);
app.get("/catalog", catalogController.showBooks);
app.get("/authors", authorsController.authors);
app.get("/community", communityController.community);
app.get("/community", communityController.reviews);
app.get("/questions", questionsController.getAllQuestions);
app.get("/contact", questionsController.getQuestionPage);
app.post("/question", questionsController.saveQuestion);

// errors
app.use(homeController.logRequestPaths);
app.use(errorController.PageNotFound);
app.use(errorController.InternalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
