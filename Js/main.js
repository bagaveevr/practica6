
const divElement = document.querySelector('div');
const ulElement = document.querySelector('ul');
const secondLiElement = document.querySelector('ul li:nth-child(2)');
const htmlElement = document.documentElement;

console.log('div элемент:', divElement);
console.log('ul элемент:', ulElement);
console.log('Второй li элемент:', secondLiElement);
console.log('html элемент:', htmlElement);


const liElements = document.querySelectorAll('li');
liElements.forEach((li) => {
    li.classList.add('list-item');
});


const userNumber = prompt("Введите количество блоков для создания:");
const blocksContainer = document.getElementById('blocks-container');

for (let i = 1; i <= userNumber; i++) {
    const block = document.createElement('div');
    block.textContent = `Блок ${i}`;
    blocksContainer.appendChild(block);
}


const form = document.getElementById('user-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    alert(`Имя: ${name}\nEmail: ${email}`);
});
