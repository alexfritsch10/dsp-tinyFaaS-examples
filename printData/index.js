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

    res.send(data);
}
