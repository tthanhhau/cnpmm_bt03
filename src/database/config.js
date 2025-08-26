require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS || null,  
    database: process.env.DB_NAME || "bt03db",
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    dialect: "mysql",   // 👈 PHẢI có dòng này
    logging: false,
  },
  test: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS || null,
    database: process.env.DB_NAME || "bt03db_test",
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    dialect: "mysql",
    logging: false,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false,
  },
};
