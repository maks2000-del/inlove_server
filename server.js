const express = require('express');
const morgan = require('morgan');
var cors = require('cors');
const methodOverride = require('method-override');
const apiUserRoutes = require('./routes/api_user_routes');
const apiCoupleRoutes = require('./routes/api_couple_router');
const apiMemoryRoutes = require('./routes/api_memory_router');
const apiDateRoutes = require('./routes/api_date_router');
const apiComplimentRoutes = require('./routes/api_compliment_router');

const app = express();

const PORT = 3001;

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log('listening port ' + PORT.toString());
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.use(methodOverride('_method'));

app.use(cors());

app.get('/', (req, res) => {});

app.use('/api', apiUserRoutes);
app.use('/api', apiComplimentRoutes);
app.use('/api', apiCoupleRoutes);
app.use('/api', apiDateRoutes);
app.use('/api', apiMemoryRoutes);

app.use((req, res) => {
    res.status(404);
});