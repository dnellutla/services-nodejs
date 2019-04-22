var express = require('express'),
     cors = require('cors'),
    app = express(),
    port = process.env.PORT || 3000;
mongoose = require('mongoose'),

    app.listen(port);

Task = require('./api/model/todoListModel'),
Service = require('./api/model/serviceModel'), bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', {useNewUrlParser: true});
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());




var todoListRouter = require('./api/routes/todoListRoutes');
var serviceRouter =  require('./api/routes/serviceRoutes');



app.use('/api', todoListRouter);
app.use('/api', serviceRouter);

console.log('RESTful API server started on: ' + port);
