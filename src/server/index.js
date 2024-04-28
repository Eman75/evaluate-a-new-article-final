var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();


const app = express()

app.use(bodyParser.json());

app.use(cors());


app.use(express.static('dist'))
//app.use(express.static('src/client'))


console.log(__dirname)

// Save url & api key in variables
const cloudURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY



app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})


// Post Function and fetching data
app.post('/api', async function(req, res) {
    userEntered = req.body.url;
    console.log(`You have entered: ${userEntered}`);
    const apiURL = `${cloudURL}key=${apiKey}&url=${userEntered}&lang=en`
    
    const response = await fetch(apiURL)
    const convertjs = await response.json()
    console.log(convertjs)
    res.send(convertjs)
    

})


// Determine which port to listen for
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


