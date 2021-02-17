module.exports = (req, res) => {
    console.log(req)
    console.log(req.data)
    console.log(req.Data)
    console.log(req.Body)
    console.log(req.body)
    res.send(req);
}
