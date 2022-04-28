const express = require ('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const apiUserRoutes = require('./routes/api_user_routes');

const app = express();

const PORT = 3001;

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log('listening port ' + PORT.toString());
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
});

app.use('/api', apiUserRoutes);

app.use((req, res) => {
    const title = 'Error';
    res
        .status(404);
}); 