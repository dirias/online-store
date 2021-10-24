const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

//User middlewere
app.use(express.json());
//FIxing CORS

const whitelist = ['https://localhost:8080', 'https://myapp.didier.com'];
const options = {
  origin: (origin, cb) => {
    if (whitelist.includes(origin)) {
      cb(null, true);
    } else {
      cb(new Error('No permitido'));
    }
  }
}

routerApi(app);

app.use(cors(options));

//Middlewares
app.use(logErrors);
app.use(errorHandler);
app.use(boomErrorHandler);

app.get('/', (request, response) => {
  response.send('This is the home page');
});



//En el orden en el que se ponen es el orden en el que se ejecutan
app.listen(port, () => {
  console.log('Running on port ' + port);
});


