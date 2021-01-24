require('dotenv').config();
import Express from "express";
var cors = require('cors');
var mysql = require('mysql');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DB
});

const app = Express();
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 9000;
connection.connect();

app.get("/test", (req, res) => {
  res.send('Connected To Back End');
});

app.get("/babynames", (req, res) => {
  connection.query('Select * from baby_names', function (err, rows, fields) {
    if (err) throw err
    var returnedRows = rows;
    res.send(returnedRows);
  })
});

app.post("/babynames", (req, res) => {
  connection.query("INSERT INTO `expanding_family`.`baby_names` (`suggestors_name`, `baby_name_suggestion`, `baby_gender`) VALUES ('" + req.body.suggestors_name + "', '" + req.body.baby_name_suggestion + "', '" + req.body.baby_gender + "')", function (err, rows, fields) {
    if (err) throw err
    // var returnedRows = rows;
    // res.send(returnedRows);
    res.send('Success');
  })
})

app.delete("/babynames", (req, res) => {
  connection.query("DELETE FROM `expanding_family`.`baby_names` WHERE (`id` = '" + req.body.id + "')", function (err, rows, fields) {
    if (err) throw err
    // var returnedRows = rows;
    // res.send(returnedRows);
    res.send('Success');
  })
})

app.get("/progress", (req, res) => {
  connection.query('Select * from progress', function (err, rows, fields) {
    if (err) throw err
    var returnedRows = rows;
    res.send(returnedRows);
  })
});

app.post("/progress", (req, res) => {
  connection.query("INSERT INTO `expanding_family`.`progress` (`progress_title`, `progress_details`, `progress_date`) VALUES ('" + req.body.progress_title + "', '" + req.body.progress_details + "', '" + req.body.progress_date + "')", function (err, rows, fields) {
    if (err) throw err
    // var returnedRows = rows;
    // res.send(returnedRows);
    res.send('Success');
  })
})

app.delete("/progress", (req, res) => {
  connection.query("DELETE FROM `expanding_family`.`progress` WHERE (`id` = '" + req.body.id + "')", function (err, rows, fields) {
    if (err) throw err
    // var returnedRows = rows;
    // res.send(returnedRows);
    res.send('Success');
  })
})

app.get("/active", (req, res) => {
  connection.query('Select * from active_items', function (err, rows, fields) {
    if (err) throw err
    var returnedRows = rows;
    res.send(returnedRows);
  })
});

app.put("/active", (req, res) => {
  connection.query("UPDATE `expanding_family`.`active_items` SET `name_suggestion` = '" + req.body.name_suggestion + "', `gender_reveal` = '" + req.body.gender_reveal + "', `progress` = '" + req.body.progress + "', `announcments` = '" + req.body.announcments + "', `events` = '" + req.body.events + "', `registry` = '" + req.body.registry + "', `registry_url` = '" + req.body.registry_url + "' WHERE (`id` = '1')", function (err, rows, fields) {
    if (err) throw err
    // var returnedRows = rows;
    // res.send(returnedRows);
    res.send('Success');
  })
})

app.get("/photos", (req, res) => {
  /* connection.query('Select * from active_items', function (err, rows, fields) {
    if (err) throw err
    var returnedRows = rows;
    res.send(returnedRows);
  }) */
});

app.post('/photos', function (req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.file || Object.keys(req.file).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + '/uploads/' + sampleFile.name;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function (err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});

app.listen(port, () => console.log("listening on port: " + port))
