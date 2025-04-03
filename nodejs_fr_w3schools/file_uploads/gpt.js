const http = require('http');
var formidable = require('formidable');
const fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    console.log("Beginning upload...");
    
    var form = new formidable.IncomingForm();
    
    form.parse(req, function (err, fields, files) {
        if (err) {
            console.error("Form parse error:", err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.write("Error parsing form data");
            return res.end();
        }

        // Log the entire files object to check its structure
        console.log("Uploaded files:", files);

        // Handle the case where there might be multiple files
        var uploadedFile = Array.isArray(files.fileToUpload) ? files.fileToUpload[0] : files.fileToUpload;

        // Check if the file exists and has a filepath property
        if (!uploadedFile || !uploadedFile.filepath) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.write("No file uploaded or incorrect file property name");
            return res.end();
        }

        var oldpath = uploadedFile.filepath;
        var newpath = 'C:/Users/levyn/Desktop/Coding/learning_fr_tutorials/nodejs_fr_w3schools/file_uploads/storage/' + uploadedFile.originalFilename;

        console.log("Old Path: ", oldpath);  // Debug log
        console.log("New Path: ", newpath);  // Debug log

        fs.rename(oldpath, newpath, function (err) {
            if (err) {
                console.error("File move error:", err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write("Error moving the file: " + err);
                return res.end();
            }

            console.log("File successfully moved!");  // Debug log
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<h1>File uploaded and moved successfully!</h1>');
            res.end();
        });
    });
  } else { 
    // Serve the HTML form
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="fileToUpload"/> <br/>');
    res.write('<input type="submit" value="Upload"/>');
    res.write('</form>');
    res.end();
  }
}).listen(8080, () => console.log("Server running on port 8080"));
