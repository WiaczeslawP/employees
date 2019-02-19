import {Employee} from "./employees/types";

function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const names = ['John', 'George', 'Harry', 'Jack', 'Helen', 'Anna'];
const surnames = ['Smith', 'Johnson', 'Williams', 'Miller', 'Brown'];
const roles = ['Project manager', 'Frontend developer', 'Backend developer', 'Designer', 'QA'];

export default function generateData() {
    let employees: Array<Employee> = [];

    for (let i = 0; i < 50; i++) {
        employees.push({
            id: i,
            name: names[getRandomInt(0, names.length)],
            surname: surnames[getRandomInt(0, surnames.length)],
            age: getRandomInt(18, 65),
            role: roles[getRandomInt(0, roles.length)],
        });
    };

    return employees;
}
