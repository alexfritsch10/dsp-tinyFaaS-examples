module.exports = (req, res) => {
    console.log("------------___________________-----------------")
    console.log(req)
    console.log("----------------------------------------------------")
    res.send(req.body);
}
