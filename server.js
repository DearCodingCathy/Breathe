const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const logger = require('morgan');
const appsRoutes = require('./routes/Apps');
const usersRoutes = require('./routes/users');
const doctorsRoutes = require('./routes/doctors')

const db = require('./db/connection')
const PORT = process.env.PORT || 3000

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))


app.use('/api', usersRoutes);
app.use('/api', appsRoutes);
app.use('/api', doctorsRoutes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Litening on port: ${PORT}`))