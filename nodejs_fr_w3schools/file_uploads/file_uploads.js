// Import the required modules
const http = require('http'); // HTTP module to create a server
var formidable = require('formidable'); // Formidable module to handle file uploads
const fs = require('fs'); // File system module to work with files

// Create an HTTP server
http.createServer(function (req, res) {
  // Check if the request URL is for file upload
  if (req.url == '/fileupload') {
    console.log("Beginning upload..."); // Log message to indicate upload process starts
    
    // Create an instance of the formidable form parser
    var form = new formidable.IncomingForm();
    
    // Parse the incoming form data (including file upload)
    form.parse(req, function (err, fields, files) {
        // Check for errors in parsing the form
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.write("Error parsing the file upload");
            return res.end();
        }
        
        // Get the uploaded file's temporary path
        var oldpath = files.fileToUpload.filepath; 
        
        // Define the new path where the file will be moved (storage folder)
        var newpath = 'C:/Users/levyn/Desktop/Coding/learning_fr_tutorials/nodejs_fr_w3schools/file_uploads/storage' + files.fileToUpload.originalFilename;
        
        // Move the file from temp directory to the desired location
        fs.rename(oldpath, newpath, function (err) {
          if (err) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.write("Error moving the file: " + err + "<br> Old path: " + oldpath);
              return res.end();
          }
          
          // If successful, send a response to the client
          res.write('File uploaded and moved successfully!');
          res.end();
        });
        
        // This line should not be here because `res.end()` is already inside the callback
        // res.write('File uploaded');
        // res.end();
    });
  } else { 
    // If the request is not for file upload, show the HTML form for file upload
    res.writeHead(200, {'Content-Type': 'text/html'}); // Set response header
    
    // HTML form for file upload
    res.write('<form action="fileUpload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="fileToUpload"/> <br/> ');
    res.write('<input type="submit" value="Upload"/>');
    res.write('</form>');
    
    return res.end(); // End the response after sending the form
  }
  
}).listen(8080); // Start the server on port 8080
