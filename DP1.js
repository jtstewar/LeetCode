/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) {
        return 1;
    }

    let ways = [1, 2];

    for (let i = 2; i < n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2];
    }

    return ways[n - 1];
};

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
        let fibNumbers = [0, 1];
        for (let i = 2; i <= n; i++) {
            fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
        }
        return fibNumbers[n];
};

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
        let fibNumbers = [0, 1, 1];
        for (let i = 3; i <= n; i++) {
            fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2] + fibNumbers[i - 3];
        }
        return fibNumbers[n];
};

/**
 * @param {number} n
 * @return {number}
 */
var tribonacciMem = function(n) {
        let a = 0;
        let b = 1;
        let c = 1;
    
        if (n <=2 && n >=1){
            return b
        } else if (n == 0){
            return a
        }
        for (let i = 3; i <= n; i++) {
            temp = c;
            c = a + b + c;
            a = b;
            b = temp;
        }
        return c;
};
