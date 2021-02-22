module.exports = (req, res) => { 
 
    let keyVal = req.url.split("/"); // -> ["", "celsius1", "15,8", ""]
    let key = keyVal[1];
    let value = keyVal[2];

    let celsius = parseFloat(value);
    let fahrenheit = (celsius * 9/5) + 32;

    let data = {
        "keygroup": "fahrenheit",
        "key": key,
        "value": fahrenheit
    };

    res.send(data);
}
