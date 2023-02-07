// task #1   ~ 20 min

const townsStringify = townsArray =>
    townsArray + '.';   // evaluates array.toString

const townsSpacedStringify = townsArray =>
    Object.values(townsArray).join(', ') + '.';


// task #2    ~ 5 min 

const roundByFive = num =>
    5 * Math.round(num / 5)


// task #3     ~ 25 min

const grammaticalCase = count => {

    let remainder = count % 100;
    if (remainder >= 11 && remainder < 19) return 'компьютеров';
    remainder %= 10;

    switch (remainder) {
        case 1: return 'компьютер';
        case 2:
        case 3:
        case 4: return 'компьютера'
        default: return 'компьютеров'
    };
}


// task #4    ~ 15 min

const isSimple = num => {

    for (i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return false;
    }

    return true;
}


// task #5    ~ 60 min

const commonNumbers = (arr1, arr2) => {

    const createIndex = (arr) => {
        return arr.reduce((result, value) => {
            result[value] ? result[value]++ : result[value] = 1;
            return result;
        }, {});
    }

    let index1 = createIndex(arr1);
    let index2 = createIndex(arr2);

    for (let key in index1) {
        if (!index2[key] || index1[key] < 2 || index2[key] < 2) delete index1[key];
    }

    return Object.keys(index1).map(value => +value);

}


// task #6  ~ 30 min

const multiplyTable = range => {

    const cell = String(range * range).length + 1;  // calculate max number width

    for (let i = 0; i <= range; i++) {

        let row = '';

        for (let j = 0; j <= range; j++) {
            if (!i && !j)
                row += (' ').repeat(cell)
            else {
                let k = !i ? (i + 1) : i;
                let l = !j ? (j + 1) : j;
                row += String(k * l).padStart(cell, ' ');
            }
        }
        console.log(row);
    }
}


// test data

const towns = ['Москва', 'Санкт-Петербург', 'Воронеж'];

const array1 = [7, 17, 1, 9, 1, 17, 56, 56, 23];
const array2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];


// test tasks

console.log('Task 1 without spaces:');
console.log(townsStringify(towns));
console.log('')

console.log('Task 1 with spaces:');
console.log(townsSpacedStringify(towns));
console.log('')

console.log('Task 2');
console.log(`27 —> ${roundByFive(27)}`);
console.log(`27.8 —> ${roundByFive(27.8)}`);
console.log(`41.7 —> ${roundByFive(41.7)}`);
console.log('')

console.log('Task 3');
console.log(`1 ${grammaticalCase(1)}`);
console.log(`2 ${grammaticalCase(2)}`);
console.log(`6 ${grammaticalCase(6)}`);
console.log(`11 ${grammaticalCase(11)}`);
console.log(`101 ${grammaticalCase(101)}`);
console.log(`122 ${grammaticalCase(122)}`);
console.log('')

console.log('Task 4');
console.log(`1 — ${isSimple(1)}`);
console.log(`2 — ${isSimple(2)}`);
console.log(`7 — ${isSimple(7)}`);
console.log(`10 — ${isSimple(10)}`);
console.log(`37 — ${isSimple(37)}`);
console.log('')

console.log('Task 5');
console.log(commonNumbers(array1, array2));
console.log('')


console.log('Task 6');
multiplyTable(5);
console.log('')

multiplyTable(10);
console.log('')

multiplyTable(15);
console.log('')