/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */

function prepareGifts(gifts) {
    // Code here
    let numbers = [];
    let repetido = false;

    for (const number of gifts){
        repetido = false;
        for (let i = 0; i < numbers.length; i++) {
            if (number === numbers[i]) {
                repetido = true;
            }
        }

        if (repetido) {
            // no hacemos nada
        }else if(!repetido) {
            numbers.push(number);

            for (let i = 0; i < numbers.length; i++) {
                for (let j = 0; j < numbers.length - 1 - i; j++) {
                    if (numbers[j] > numbers[j + 1]) {
                        let aux = numbers[j + 1];
                        numbers[j + 1] = numbers[j];
                        numbers[j] = aux;
                    }
                }
            }
        }
    }

    return numbers
}