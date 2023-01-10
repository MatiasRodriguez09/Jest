const usd = 1.07;
const yen = 141.65;
const pound = 0.88;
const euro = 1;

test("One euro should be 1.206 dollars", function() {
    //importa la funcion de app.js
    const {
        fromEuroToDollar
    } = require('./app.js')


    const euros = fromEuroToDollar(3.5)

    // si 1 euro son 1.206 dollars, entonces 3.5 euros deberian ser (3.5 * 1.2)
    const expected = 3.5 * 1.2;


    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 132 yens", function() {
    const {
        fromDollarToYen
    } = require('./app.js')
    const dollars = fromDollarToYen(5)
    const expected = 132 * 5;
    expect(fromDollarToYen(5)).toBe(660);
})

test("One yen should be 0.006 pounds", function() {
    const {
        fromYenToPound
    } = require('./app.js')
    const yens = fromYenToPound(300)
    const expected = 0.006 * 300;
    expect(fromYenToPound(300)).toBe(1.8);
})