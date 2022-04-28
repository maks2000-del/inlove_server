const express = require ('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
require('dotenv').config();
const postRoutes = require('./routes/post_routes');
const postApiRoutes = require('./routes/api_post-routes');
const contactRoutes = require('./routes/contact_routes');
const createPath = require('./helpers/create_path');

const app = express();

app.set('view engine', 'ejs');

const PORT = 3001;

app.listen(process.env.PORT, (error) => {
    error ? console.log(error) : console.log('listening port ' + PORT.toString());
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.urlencoded({ extended: false }));

//app.use(express.static('styles'));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    const title = 'Home';
    res.render(createPath('index'), {title} );
});

app.use(postRoutes);
app.use(contactRoutes);
app.use(postApiRoutes);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  });

app.use((req, res) => {
    const title = 'Error';
    res
        .status(404)
        .render(createPath('error'), {title} );
}); 