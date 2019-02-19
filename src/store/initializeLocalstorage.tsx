import generateData from './generateData';

export default function initializeLocalstorage() {
    if (!localStorage.getItem('employees')) {
        localStorage.setItem('employees', JSON.stringify(generateData()));
    }
}
