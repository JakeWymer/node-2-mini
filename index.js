const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const dotenv = require('dotenv').config();
const controller = require('./controller');

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db);
  // app.get('db').new_planes().then(planes => {
  //   console.log(planes);
  // }).catch(err => {
  //   console.log(err);
  // });
  // app.get('db').get_planes().then(planes => {
  //   console.log(planes);
  // }).catch(err => {
  //   console.log(err);
  // });
}).catch(err => {
  console.log(err);
});

app.get('/api/planes', controller.getPlanes);

const port = process.env.PORT || 3000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );