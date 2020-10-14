module.exports = function reverse (n) {
    if (n < 0) {
        n = -1 * n;
    }
    let str = n + '';
    let revStr = ''
    for (let i = str.length-1; i >= 0; i--) {
        revStr += str[i];
    }
    let answer = 0;
    answer += +revStr;
    return answer;
}
