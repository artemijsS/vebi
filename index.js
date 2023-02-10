const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));


const PORT = process.env.PORT || 5000;


// pdf
app.use('/api/pdf', require('./routes/pdf.routes'));


//**************************
//  REACT APP
//**************************

const path = require('path');
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

//**************************

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
