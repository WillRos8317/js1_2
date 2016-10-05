var x = +prompt('Введите число, которое необходимо возвести в степень');
var n = +prompt('Введите степень');

function pow(x, n) {
    var result = 1;
    var abs = Math.abs(n);

    for (var i = 0; i < abs; i++) {
        result = result * x;
    }
    if (n <= 0) {
        alert('Степень ' + n + ' не поддерживается, введите целое число, введите больше 0');
    } else {
        if (n > 0) {
            return result;
        } else {
            result = 1 / result;
            return result;
        }
    }

}
var powResult = pow(x, n);

console.log(powResult);
alert(powResult)