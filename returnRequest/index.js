module.exports = (req, res) => {
    console.log("------------___________________-----------------");
    console.log(req);
    let keyVal = req.url.split("/");
    console.log("Received Key: " + keyVal[0]);
    console.log("Received Value: " + keyVal[1]);
    console.log("----------------------------------------------------");
    res.send(req.body);
}
