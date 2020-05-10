const sqlite = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");

const DB_PATH = "db.sqlite";

const db = new sqlite.Database(
  DB_PATH,
  sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE,
  (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message);
      throw err;
    } else {
      console.log("Connected to the SQLite database.");
    }
  }
);

module.exports = db;
