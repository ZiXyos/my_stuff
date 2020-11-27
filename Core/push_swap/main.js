const my_length = require("../../Lib/legth")

const test = () => {

    const data = [0, 2, 3, 45, 54, 545, 3453, 3];
    let tmp = data[0];

    for (let i = 1; data[i]; i++) {

        if(data[i] < tmp) continue;
        else tmp = data[i];
    }

    const maxDigit = parseInt(tmp);
    console.log(my_length.getLength(maxDigit));
}

exports.pushSwap = () => {

    test();
    console.log("hello world")
}