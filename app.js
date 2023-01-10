const usd = 1.07;
const yen = 141.65;
const pound = 0.88;
const euro = 1;

// declaramos la funcion "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}



const fromDollarToYen = function(dolly) {
    let convertionDollar_Yen = 132 * dolly;
    return convertionDollar_Yen;
}

const fromYenToPound = function(yeni) {
    let convertionYen_Pound = 0.006 * yeni;
    return convertionYen_Pound;
}

module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};