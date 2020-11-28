const Mylength = require("../../Lib/legth");
const MyStr = require("../../Lib/string");
const DataManager = require("./dataManager");

const data = [1110099, 0, 2, 3, 45, 54, 545, 3453, 3];

exports.pushSwap = () => {

    const maxDigit = DataManager.getMaxDigit(data);
    const dataStr = DataManager.getDataNumb(data);
    const itemNbr = DataManager.itemNumb(maxDigit, dataStr);

    DataManager.setNumber(itemNbr, dataStr);
}