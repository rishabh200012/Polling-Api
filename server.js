const Port = 3000;
import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes/index.js';
import connectDB from './config/mongoose.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', routes);

app.listen(Port, (err) => {
    if (err) {
        console.error(err);
    }
    console.log("Server is running...", Port);
    connectDB();
});
