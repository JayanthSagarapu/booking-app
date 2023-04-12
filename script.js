const username = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const form = document.querySelector('#form');
const list = document.querySelector('#list')
const btn = document.querySelector('.btn')

btn.addEventListener('click',onsubmit);

function onsubmit(e){
    e.preventDefault();

    const nameInput = username.value;
    const emailInput = email.value;
    const phoneInput = phone.value;

    const li = document.createElement('li');

    li.className = 'list-group-item align-self-center w-75 mb-1 bg-secondary';

    li.append(document.createTextNode(nameInput)," - ",document.createTextNode(emailInput)," - ",document.createTextNode(phoneInput))

    list.appendChild(li)

    localStorage.setItem(nameInput ,JSON.stringify({name:nameInput,email:emailInput,number:phoneInput}))


}
