exports.newStr = (length, c) => {

    return (new Array(length + 1).join(c));
}

exports.numToStr = (number) => {

    return(number.toString());
}