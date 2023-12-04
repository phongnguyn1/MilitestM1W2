let array = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <array.length; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function PrimesInArray(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            count++;
        }
    }
    return count;
}
