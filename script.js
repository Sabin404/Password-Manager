const website = document.querySelector('.website');
const username = document.querySelector('.Username');
const pass = document.querySelector('.pass');
const btn = document.querySelector('.button');
const saveBtn = document.querySelector('.save');
const passwords = document.querySelector('.passwords table tbody');
let p = document.querySelector('p');
const dlt = document.querySelector('.delete');

btn.addEventListener('click', (e) => {
    let webValue = website.value;
    let userValue = username.value;
    let passkey = pass.value;
    
    if (webValue !== '' && userValue !== '' && passkey !== '') {
        let newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${webValue}</td>
            <td>${userValue}</td>
            <td>${passkey}</td>
            <td><button class="copy">Copy</button></td>
        `;

        passwords.appendChild(newRow);


        website.value = '';
        pass.value = '';
        username.value = '';

        saveToLocalStorage();
    } else {
        p.innerHTML = 'Enter data first ';
    }
});

saveBtn.addEventListener('click', () => {
    saveToLocalStorage();
});

window.addEventListener('load', () => {
    const storedData = localStorage.getItem('passwordData');
    if (storedData) {
        passwords.innerHTML = storedData;
    }
});


dlt.addEventListener('click', () => {
    localStorage.removeItem('passwordData');
    location.reload();
});

function saveToLocalStorage() {
    const tableHtml = passwords.innerHTML;
    localStorage.setItem('passwordData', tableHtml);
}
