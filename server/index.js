let express = require('express');
const { subscribe } = require('firebase/data-connect');
let mongoose = require('mongoose');
let cors = require('cors');
const subscribersRouter = require('./routes/web/subscribersRoute');
require('dotenv').config();
let app = express();
app.use(cors())
app.use(express.json());

//Routes
app.use('/api/website/subscribers', subscribersRouter);


mongoose.connect(process.env.DBURL).then(() =>{
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 3000, () =>{
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((err) =>{
    console.error("Error connecting to MongoDB:", err);
});