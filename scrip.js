

let num = document.getElementById("result");

function calculate(operation) {
            let num1 = Number(document.getElementById('num1').value);
            let num2 = Number(document.getElementById('num2').value);
            let result = 0;

            if (operation === '+') {
                result = num1 + num2;
            } else if (operation === '-') {
                result = num1 - num2;
            } else if (operation === '*') {
                result = num1 * num2;
            } else if (operation === '/') {
                result = num2 !== 0 ? num1 / num2 : 'Ошибка (деление на 0)';
            }

            num.innerHTML = result;
        }