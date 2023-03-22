// const numbers = [1, 6, 7, 9, 4];

// function Cr(nums) {

//     if (numbers.includes(7)) {
//         return "Sioo"
//     } else {
//         return "Messi"
//     }
//     // return nums
// }
// console.log(Cr(numbers));

// const number = ["Muhhammad", "Da", "Yo", 9, 85, 52, 4, 6]
// const challange = function(array, target) {
//     return array.IndexOf(target)
// }
// console.log(challange(number));


// 1 Uy Ishi
function findIndexs(arr, element) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            result.push(i);
        }
    }
    return result;
}

const myArray = [1, 2, 3, 4, 2, 5];
const myElement = 3;

const result = findIndexs(myArray, myElement);
console.log(result);