const path = require("node:path");
const sqlite3 = require("better-sqlite3");

const absolutePath = path.resolve(__dirname, "../database/busyday.db");

const db = sqlite3(absolutePath, { fileMustExist: true });
db.pragma("journal_mode = WAL");

module.exports = db;
