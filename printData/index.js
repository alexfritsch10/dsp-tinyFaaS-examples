module.exports = (req, res) => { 
    

    //console.log(req);
    
    let keyVal = req.url.split("/"); // -> ["", "testKey", "testValue", ""]
    console.log("Received Key: " + keyVal[1]);
    console.log("Received Value: " + keyVal[2]);

    let data = {
        "keygroup": "reponseData",
        "key": keyVal[1],
        "value": keyVal[2]
    }

    res.send(data);
}
