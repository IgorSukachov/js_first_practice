const resultElement = document.getElementById('result')
// document - объект, который явдяется всем DOM деревом и может взаимодействовать с каждым элементом
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action
/*
console.log(resultElement.textContent) // textContent позволяет получить содержимое элемента
// resultElement.textContent = 4 - так можно изменять содержимое элемента под айди результат
console.log(input1, input2.value) // первое нам паказывает сам элемент, а со вторым мы уже взаимодействуем под средством свойства value, т.е число инпута которое мы написали в атрибуте элемента инпута и нам вернуло значение в строковом виде
*/
/*
const sum = input1.value + input2.value // sum будет равен 105 '10' + '5'
resultElement.textContent = sum
*/
 // Number - объект обвертка, преобразует в число
// console.log(typeof sum)  typeof - проверяет тип данных мы получили string (строка). С HTML всегда считывается как строчка
// console.log(resultElement.textContent)
/*
submitBtn.onclick = function () {
    const sum = Number(input1.value) + Number(input2.value) // подсчитываем
    resultElement.textContent = sum // Мы присваиваем результат, нашему полю результата
}
*/
console.log(minusBtn.textContent)
// в условии if  = - это присвоение, == - это "равно ли?"

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

function printResult(result) { // функция принтрезультат не знает, что такое sum, поэтому мы используем свой придуманный параметр результат 
    if (result < 0) {
        resultElement.style.backgroundColor = 'red'
        resultElement.style.color = 'yellow'
    } else {
        resultElement.style.backgroundColor = 'green'
        resultElement.style.color = 'white'
    }
    resultElement.textContent = result
}

// Более простой способ 1
// submitBtn.onclick = function () {
//     if ( action == '+') {
//         const sum = Number(input1.value) + Number(input2.value) // подсчитываем
//         printResult(sum) // передаём подсчитанное значение в функцию
//     } else if ( action == '-') {
//         const sum = Number(input1.value) - Number(input2.value) // подсчитываем
//         printResult(sum)
//     }
// }

// более функциональный 2
function computeNumbersWitchAction(inp1,inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    // if (actionSymbol == '+') {
    //     return num1 + num2
    // } else if  (actionSymbol == '-') {
    //     return num1 - num2 
    // }
// return возвращает полученные значения обратно в функцию, в нашем случае он возвращает значение actionSymbol

    // Есть ещё тернарное условие(выражение), где можно записать так:
    return actionSymbol == '+' ? num1 + num2 : num1 - num2 
    // ? - правда , : - ложь. Если наше значение имеет +, то выполняем такое условие, если нет(:), то выполняем num1 - num2
}

// В начале мы кликаем на одну из кнопок, где определяется наше значения action + или -
submitBtn.onclick = function () { 
    // console.log(action) //undefiend
    const result = computeNumbersWitchAction(input1, input2, action)
    // console.log(result) // 15
    printResult(result)
    /* При нажатии на кнопку результат, идёт обрабатывться:
        1. Функция computeNumbersWitchAction, мы в неё передали:
        а) input1, наш инпут с первым значеним 
        б) input2, наш инпут со вторым значеним
        в) action, указали переменную, где у нас пока пусто или в консоле будет написанно undefiend, но потом придёт - или +
        
        2. Переменная и инпуты были указаны, то запускается сама функция computeNumbersWitchAction, где будут приняты три значения переданных ранее (inp1, inp2, actionSymbol), т.е
        input1 = inp1
        input2 = inp2
        action = actionSymbol,
        Дальше в функции мы присвоили значения num1 и num2 значение инпута и преобразовали их строки в числа. После этого мы установили условия для вычисления знака + или -, и произвели вычислния и возвратили полученное число записали в константу result.
        Дальше мы передали значение функции printResult и она начала производить вычисления, которые мы указали в самой функции, т.е
        1. Присвоения заднего фона и цвета
        2. И полученный результат result мы записали в тег <p>
    */
}