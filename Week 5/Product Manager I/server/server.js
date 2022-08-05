const express = require("express");
const cors = require("cors");
const app = express();

//Middleware
//Both are needed for post and put calls(i.e. where we SENS infor in the request)
//Without, we would get TypeErrors on our "post" calls https://www.geeksforgeeks.org/express-js-express-json-function/

//This parses incoming requests with JSON payloads. Allows us to recongnize Request Object as a JSON Object.
app.use(express.json());

//This parses incoming requests with JSON payloads consisting of STRINGS OR ARRAYS.
//Allows us to recognize Request Object as a strings of array.
app.use(express.urlencoded({extended: true}));

app.use(cors({
    origin: "http://localhost:3000"
}))

//Need to require config file
require("./config/mongoose.config")

//Need to reuire the routes
require("./routes/product.routes")(app);
//Longhand:
//const productRoutes = require("./routes/product.routes");
//productRoutes(app);

app.listen(8000, () => console.log("You are connected to port: 8000"))




