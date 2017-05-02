// call the packages we need
import express from 'express';        // call express
import bodyParser from 'body-parser';
import fs from 'fs';
import denodeify from 'denodeify';
import cors from 'cors';

const app = express();                 // define our app using express
const readdir = denodeify(fs.readdir);
const readFile = denodeify(fs.readFile);

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 9000;        // set our port

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router();              // get an instance of the express Router


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/classes', cors(), (req, res) =>
    readdir('static/')
        .then(files => res.json(files.filter(file => !/^\./.test(file)).map(file => ({ name: file, path: `static/${file}` })))));

router.get('/photos/:classe', cors(), (req, res) =>
    readdir(`static/${req.params.classe}`)
        .then(files => res.json(files.filter(file => !/^\./.test(file)).map(file => ({ name: file, path: `static/${file}` })))));

router.get('/photo/:classe/:id', cors(), (req, res) => {
  readFile(`static/${req.params.classe}/${req.params.id}`).then(file => res.send(file.toString())).catch(e => console.log(e));
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
app.use(cors());

// START THE SERVER
// =============================================================================
app.listen(port);
