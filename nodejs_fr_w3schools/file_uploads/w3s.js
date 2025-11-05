var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    console.log("Beginning upload...");
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        console.log(files.filetoupload);
      var oldpath = toString(files.filetoupload.filepath || files.filetoupload.path);
      var newpath = 'C:/Users/levyn/Desktop/Coding/learning_fr_tutorials/nodejs_fr_w3schools/file_uploads/storage/' + toString(files.filetoupload.originalFilename);
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);