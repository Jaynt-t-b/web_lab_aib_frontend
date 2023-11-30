// Задание 1. level stone
let firstNumber = prompt('var one');
let secondNumber = prompt('var two');

if (firstNumber === secondNumber) {
    console.log('equally');
} else {
    console.log('not equally');
}

let string = 'world';
let stringPlusNumber = firstNumber + string;

// Задание 2. level iron
let fruits = ['apple', 'strawberry', 'blueberry', 'raspberry', 'lemon'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);

    switch (fruits[i]) {
        case 'apple':
            console.log('apple green');
            break;
        case 'strawberry':
            console.log('strawberry red');
            break;
        case 'blueberry':
            console.log('blueberry blue');
            break;
        case 'raspberry':
            console.log('raspberry light red');
            break;
        case 'lemon':
            console.log('lemon yellow');
            break;
        default:
            console.log('Unknown fruit');
    }
}

// Задание 3. level gold
let numberOfEmployees = prompt('Введите кол-во человек ', 0);
numberOfEmployees = parseFloat(numberOfEmployees);

while (isNaN(numberOfEmployees) || numberOfEmployees <= 0) {
    numberOfEmployees = prompt('Введите корректное кол-во человек ', 0);
    numberOfEmployees = parseFloat(numberOfEmployees);
}

let salaryPerPerson = prompt('Введите зарплату на человека ', 0);
salaryPerPerson = parseFloat(salaryPerPerson);

while (isNaN(salaryPerPerson) || salaryPerPerson <= 0) {
    salaryPerPerson = prompt('Введите корректную зарплату на человека ', 0);
    salaryPerPerson = parseFloat(salaryPerPerson);
}

alert('Затраты на ЗП: ' + numberOfEmployees * salaryPerPerson);

// Задание 4
let students = [
    { FIO: 'Петров А.А.', Mark: 5 },
    { FIO: 'Иванов Б.Б.', Mark: 3.4 },
    { FIO: 'Сидоров Г.Г.', Mark: 9 },
    { FIO: 'Немолодой Д.Д', Mark: 2 },
    { FIO: 'Молодой Е.Е', Mark: 3.4 }
];

let totalScore = 0;
let numberOfStudents = 0;
let badStudents = [];

for (let i = 0; i < students.length; i++) {
    let currentScore = students[i].Mark;

    if (currentScore < 0 || currentScore > 5) {
        console.log('Оценка ' + currentScore + ' не учитывается, так как не соответствует допустимым значениям');
        continue;
    }

    if (currentScore < 4) {
        badStudents.push(students[i]);
    }

    totalScore += currentScore;
    numberOfStudents++;
}

let averageScore = totalScore / numberOfStudents;
console.log('Средняя оценка: ' + averageScore);

console.log('Плохие студенты:');
if (badStudents.length === 0) {
    console.log('Таких нет');
} else {
    badStudents.forEach(student => {
        console.log('ФИО: ' + student.FIO + '; Оценка: ' + student.Ocenka);
    });
}

//Задание 5
//Может в меру своих знаний, а может реально код нормальный, но я не придумал как прошлый код улучшить