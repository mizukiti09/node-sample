const roundTo = require("round-to")

var padding = (value) => {
    if (isNaN(parseFloat(value))) {
        return "-";
    }

    return roundTo(value, 2).toPrecision(3)
}

var round = (value) => {
    return roundTo(value, 2);
}

module.exports = {
    padding,
    round
}