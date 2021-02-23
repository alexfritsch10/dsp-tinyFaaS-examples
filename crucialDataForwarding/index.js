const axios = require("axios")

module.exports = (req, res) => { 
    
    const keyVal = req.url.split("/"); // -> ["", "celsius1", "15,8", ""]
    const key = keyVal[1];
    const value = keyVal[2];

    const celsius = parseFloat(value);

    let data = {
        "keygroup": "loggingData",
        "key": key,
        "value": ""
    }

    if (celsius > 30) {
        axios.post("http://ec2-instance-IP")
        .then((repsonse) => {
            data.value = repsonse.data.value;
        })
        .catch((err) => {
            data.value = err;
        })
    }

    res.send(data);
}
