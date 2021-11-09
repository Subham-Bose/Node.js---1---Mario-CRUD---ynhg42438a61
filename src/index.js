const connectDB = require("./db/connect");
const port = 3000;
const app = require("./app");

// mongoose.connection
//   .once("open", () => {
//     console.log("connection established");
//   })
//   .on("connectionError", (err) => {
//     console.log(err);
//   });

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => console.log(`App listening on port ${port}!`));
  } catch (error) {
    console.log(error);
  }
};

start();
