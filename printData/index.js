module.exports = (req, res) => {
    console.log(req);
    let keyVal = req.url.split("/"); // -> ["", "testKey", "testValue", ""]
    console.log("Received Key: " + keyVal[1]);
    console.log("Received Value: " + keyVal[2]);
    res.send(req.body);
}
