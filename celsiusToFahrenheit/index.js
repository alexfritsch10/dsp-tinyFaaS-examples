module.exports = (req, res) => { 
 
    const keyVal = req.url.split("/"); // -> ["", "celsius1", "15,8", ""]
    const key = keyVal[1];
    const value = keyVal[2];

    const celsius = parseFloat(value);
    const fahrenheit = Math.round((celsius * 9/5) + 32);

    const data = {
        "keygroup": "fahrenheit",
        "key": key,
        "value": fahrenheit.toString()
    };

    res.send(data);
}
