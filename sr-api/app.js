const express = require('express');
const bodyParser = require('body-parser');

//Set Default Module Path
require('app-module-path').addPath(__dirname);

//Database Connection
require('src/config/db.js');

//Using the Express Module
let app = express();

//Body Parser 
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use('/skills', require('src/routes/SkillRoutes.js'));
app.use('/skillcategories', require('src/routes/SkillCategoryRoutes.js'));
app.use('/employees', require('src/routes/EmployeeRoutes.js'));

//Node JS Server
let server = app.listen(process.env.PORT || 4100, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Server started running at http://%s:%s', host, port);
})