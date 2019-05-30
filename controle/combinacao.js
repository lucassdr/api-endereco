let combinaton = function combinaton(addressList) {
    // let addressList = ["Endereço 1", "Endereço 2", "Endereço 3", "Endereço 4"];
    let addressListLength = addressList.length;
    let combinatonArray = [];

    for (i = 0; i < addressListLength; i++) {
        for (j = i + 1; j < addressListLength; j++) {
            combinatonArray.push({"addressA":addressList[i],"addressB":addressList[j] })
            console.log(JSON.stringify(addressList[i]) + " - \n" + JSON.stringify(addressList[j]))
        }
    }

    return combinatonArray;

}

module.exports = combinaton;
