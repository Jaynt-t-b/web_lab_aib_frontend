let numPeople = prompt('Введите кол-во человек ', undefined);
while(isNaN(numPeople) || numPeople === 0) {
    numPeople = prompt('Введите кол-во человек ', undefined);
}

let salaryPerPerson = prompt('Введите зарплату на человека ', undefined);
while(isNaN(salaryPerPerson) || salaryPerPerson === 0) {
    salaryPerPerson = prompt('Введите зарплату на человека ', undefined);
}

alert('Затраты на ЗП: ' + numPeople * salaryPerPerson);