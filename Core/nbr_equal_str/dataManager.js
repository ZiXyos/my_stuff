const my_length = require("../../Lib/legth");
const my_Str = require("../../Lib/string");

exports.getMaxDigit = (data) => {

    let tmp = data[0];
    for (let i = 1; data[i]; i++) {

        if(data[i] < tmp) continue;
        else tmp = data[i];
    }
    return(parseInt(tmp));
}

exports.itemNumb = (maxDigit) => {

    let digit = my_length.getLength(maxDigit);
    let str = my_Str.newStr(digit, "0");

    return (str);
}

exports.setNumber = (itemNbr, dataStr) => {

    let rdyData = [];
    const l = itemNbr.length;
    for (let i in dataStr) {

        let middle = l - dataStr[i].length;
        let newStr = itemNbr.substring(0, middle);
        rdyData.push(newStr + dataStr[i]);
    }

    console.log(rdyData);
    return (rdyData);
}

exports.getDataNumb = (data) => {

    let dataStr = [];
    for(let j in data) {

        dataStr.push(my_Str.numToStr(data[j]));
    }

    return(dataStr);
}