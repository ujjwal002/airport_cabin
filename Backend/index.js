const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const sequelize = require("./config/database");
const cors = require('cors')
const app = express();
(async () => {
  try {
    await sequelize.authenticate();
    // sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true })
    //   .then(() => {
    //     return sequelize.sync({ force: true });
    //   })
    //   .then(() => {
    //     return sequelize.query('SET FOREIGN_KEY_CHECKS = 1', { raw: true });
    //   })
    //   .catch(error => {
    //     console.error('Error syncing models:', error);
    //   });
    console.log("Connection to the database has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes")
const adminRoutes = require("./routes/adminRoutes")

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/admin", adminRoutes)

app.listen(4000, () => {
  console.log("server started at port 3000");
})