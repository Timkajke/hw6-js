// Создайте функцию stringFrom(…), возвращающую строку,
// состоящую из значений всех переданных аргументов.
// Например, вызов stringFrom('I have', 5, 'apples')
// вернет строку «I have 5 apples»;
// вызов stringFrom('Х value is', true) вернет строку «Х value is true».

/* function stringFrom() {
    for (let i = 0; i < arguments.length; i++) {
        document.write(`${arguments[i]}` + ' ');
    }
}
stringFrom('Х value is', true); */

// Создайте функцию, возвращающую значение минимального 
// из всех переданных аргументов.

/* function minFrom() {    
    for (let i = 0; i < arguments.length; i++) {
        var minToFind = arguments[0];
        if (minToFind > arguments[i]){
            minToFind = arguments[i];
        }
    }
    return minToFind;
}
alert(minFrom(5,9,0)); */

// Создайте функцию numbers(), которая будет подсчитывать количество
// переданных числовых аргументов. Например, numbers(1, 2, “a”)
// вернет значение 2, numbers(true, 2, false) — 1, numbers() — 0.

/* function numbers(...args) {
    let quantityOfNumbers = 0;
    for (const arg of args) {
        if (typeof arg === 'number') {
            quantityOfNumbers++;
        }
      }
    return quantityOfNumbers;
}
alert(numbers(true,2,false)); */

// Создайте функцию mean(), которая рассчитает среднее значение
// от всех числовых аргументов, игнорируя аргументы нечислового типа.
// Например, mean (1, 2,“a”) вернет значение 1.5 (среднее 1 и 2),
// mean(true, 2, false) — 2, mean() — 0.

/* function mean(...args) {
    let meanOfNumbers = 0;
    let quantityOfArgsNumbers = 0;
    for (const arg of args) {
        if (typeof arg === 'number') {
            meanOfNumbers += arg;
            quantityOfArgsNumbers++;
        }
    }
    return meanOfNumbers / quantityOfArgsNumbers;
}
alert(mean(1, 2,'a')); */