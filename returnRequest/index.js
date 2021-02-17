module.exports = (req, res) => {
    console.log(req.body)
    console.log("----------------------------------------------------")
    console.log(req)
    res.send(req);
}
