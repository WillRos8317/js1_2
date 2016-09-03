var x = prompt('Введите число, которое необходимо возвести в степень')
var n = prompt('Ввведите степень числа')

function pow(x, n) {
    if (n != 1) {
        return x * pow(x, n - 1);
    } else {
        return x;
    }
}

alert( pow(x, n) );