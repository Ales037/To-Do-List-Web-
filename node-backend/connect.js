// ConFig


let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'), //  ช่วยให้เราอ่านข้อมูลฝั่ง client POST.มาได้ผ่าน req.body โดยทํางานร่วมกันกับ express
    mongoDb = require('./database/db')

    // Connect MongoDB

    mongoose.Promise = global.Promise;
    mongoose.connect(mongoDb.db, {

      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true

    }).then(() =>{
      console.log('Database successfully connected');
    }, error => {
      console.log('Error connecting: ' + error);
    })

    const workRoute = require('./routes/work.routes')


    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: false
    }))

    app.use(cors());


    // Static path
    app.use(express.static(path.join(__dirname, 'dist/')))

    // Base route
    app.get('/',(req, res) =>{
      res.sendFile(path.join(__dirname, 'dist/index.html'))
    })

    // API Root
    app.use('/api',workRoute);

    // PORT

    const port = process.env.PORT || 8000;

    app.listen(port, () => {
      console.log('Listening on port ' + port)
    })

    // 404 Heandler

    app.use((req, res, next) => {
      next(createError(404));
    })

    // error handlers

    app.use(function(err, req, res, next) {

      console.error(err.message);
      if(!err.statusCode) err.statusCode = 500;
      res.status(err.statusCode).send(err.message);

    })
