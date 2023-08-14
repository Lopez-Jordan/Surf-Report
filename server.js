const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();

const sess = {
    secret: 'Super secret secret',
    cookie: {maxAge: 21600},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.use(session(sess)); 

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());  //parses incoming JSON 
app.use(express.urlencoded({ extended: true }));    //parses incoming URL-endoded data
app.use(express.static(path.join(__dirname, 'public')));  //serves static files from the 'public' directory

app.use(routes);  // ROUTES

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));   // test to make sure this works
});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`NOW Listening http://localhost:${PORT}`));
  });