const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors'); 
const db = require('./db/db');
const PORT = 5000;
const faqRoutes = require('./routes/faq');


// middlewares
app.use(cors()); 
app.use(bodyParser.json());
app.use("/api", faqRoutes);

db();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(PORT, () => {
    console.log('server running at port ' + PORT );
})

app.post('/test', (req, res) => {
    res.send('working');
    console.log('hi');
})