const mongoose = require("mongoose");
const dbname = "authors_db"

mongoose.connect(`mongodb://localhost/${dbname}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() =>{console.log(`You are now connected to the database called ${dbname}`)})
    .catch((err) => {console.log(`You had a problem connecting to ${dbname}. Your error is: ${err}`)})