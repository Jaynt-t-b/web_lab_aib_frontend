let students = [
    {FIO:'Петров А.А.',Ocenka:5},
    {FIO:'Иванов Б.Б.',Ocenka:3.4},
    {FIO:'Сидоров Г.Г.',Ocenka:9},
    {FIO:'Немолодой Д.Д',Ocenka:2},
    {FIO:'Молодой Е.Е',Ocenka:3.4}
];

let sum = 0;
let count = 0;
let badStudents = [];

students.forEach(student => {
    if (student.Ocenka >= 0 && student.Ocenka <= 5) {
        sum += student.Ocenka;
        count++;
        if (student.Ocenka < 4) {
            badStudents.push(student);
        }
    } else {
        console.log('Это значение учитываться не будет оно не соответствует допустимым значениям');
    }
});

let average = sum / count;
console.log('Средняя оценка: ' + average);

console.log('Плохие студенты:');
if (badStudents.length === 0) {
    console.log('Таких нет');
} else {
    badStudents.forEach(student => {
        console.log('Фио: ' + student.FIO + '; Оценка: ' + student.Ocenka);
    });
}