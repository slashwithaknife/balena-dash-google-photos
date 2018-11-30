// SERVER SETUP
// =============================================================================

// Call the packages we need
var express    = require('express');        
var request    = require('request');
var cors       = require('cors')
var app        = express();                

// Enable HTML template middleware
app.engine('html', require('ejs').renderFile);

// Enable static CSS styles
app.use(express.static('styles'));

// Set our port
var port = process.env.PORT || 80;        

// Get an instance of the express Router
var router = express.Router();              

// Main route
router.get('/', cors(), function(req, res){

    // Get album id from env variable 
    var albumID = process.env.ALBUM_ID;

    // Parse photos
    const rx = /\["(https:\/\/[^\.]+.googleusercontent\.com\/[^"]+)",([0-9]+),([0-9]+),/
    const extractPhotos = data => data.match(new RegExp(rx, 'g'))
    .map(m => m.match(rx))
    .map(p => {
        const width = +p[2]
        const height = +p[3]
        const url = `${p[1]}=w${width}-h${height}-no`
        return `${p[1]}=w1000` // Change here to increase/decrease image width-size
    })

    request({
        uri: 'https://photos.app.goo.gl/' + albumID, 
        method: "GET",  
        timeout: 10000
    }, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            // from within the callback, write data to response, essentially returning it.
            body = extractPhotos(body)
            
            // sometimes google gives duplicated items, remove them
            body = removeDups(body)

            res.render('index.html', {photos: body});
        }

        // if there are errors 
        else {
            res.send('{"error" : "Could not parse album"}')
            console.log('error:', error); // Print the error if one occurred
        }
    })
});

// Register routes
app.use('/', router)

// Server Start
// =============================================================================
app.listen(port)
console.log('Magic happens on port ' + port)

// FUNCTIONS
function removeDups(names) {
    let unique = {};
    names.forEach(function(i) {
        if(!unique[i]) {
            unique[i] = true;
        }
    });
    return Object.keys(unique);
}