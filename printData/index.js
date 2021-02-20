const axios = require('axios');

module.exports = (req, res) => { 
    console.log("Received Key: " + keyVal[1]);
    console.log("Received Value: " + keyVal[2]);

    console.log(req);
    let keyVal = req.url.split("/"); // -> ["", "testKey", "testValue", ""]

    let data = {
        "keygroup": "reponseData",
        "key": keyVal[1],
        "value": keyVal[2]
    }
    // the ip address depends on the local machine 
    axios.post("http://172.21.0.1:8081", data, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
            console.log(response);
            callback(response.data.Status, response.data.Message);
        })
        .catch((error) => {
            console.log(error);
            callback('400', 'Check for API Connection!');
        });

    res.send(req.body);
}
