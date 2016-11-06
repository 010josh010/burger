
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));


// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));


app.set('view engine', 'handlebars');

const routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

const PORT = 3001;

app.listen(PORT ,()=> console.log('listening on', PORT));

