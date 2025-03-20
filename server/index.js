const app = require("./app");
const connectDatabase = require("./config/database");
const {v2: cloudinary} = require("cloudinary");
const pino = require("pino");
const logger = pino();
const PORT = process.env.PORT || 4000;

// UncaughtException Error
process.on("uncaughtException", (err) => {
  logger.error(`Error: ${err.message}`);
  process.exit(1);
});

// connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const server = app.listen(PORT, () => {
  logger.info(`Server running`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  logger.error(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
