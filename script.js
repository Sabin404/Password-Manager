const website = document.querySelector('.website');
const username = document.querySelector('.Username');
const pass = document.querySelector('.pass');
const btn = document.querySelector('.button');
const passwords = document.querySelector('.passwords');
let p = document.querySelector('p');
const save = document.querySelector('.save');
const dlt = document.querySelector('.delete');
let tableshow = false;


btn.addEventListener('click', (e) => {

  let webValue = website.value;
  let userValue = username.value;
  let passkey = pass.value;
  if (webValue !== '' && userValue !== '' && passkey !== '') {
    if (!tableshow) {
      const tableHtml = `
      <h2>Your Data Here </h2>
      <table>
        <tr>
          <th>Website</th>
          <th>Username</th>
          <th>Password</th>
          <th>Copy</th>
        </tr>
        <tr>
          <td>${webValue}</td>
          <td>${userValue}</td>
          <td>${passkey}</td>
          <td><button class="copy">Copy</button></td>
        </tr>
      </table>
      `
      passwords.innerHTML += tableHtml;
      tableshow = true;

      saveToLocalStorage();
      website.value = '';
      pass.value = '';
      username.value = '';
    } else {
      passwords.querySelector('table').innerHTML += `
      <tr>
          <td>${webValue}</td>
          <td>${userValue}</td>
          <td class="passcpy">${passkey}</td>
          <td><button class="copy">Copy</button></td>
        </tr>
      `
    }
    p.innerHTML = '';
  } else {
    p.innerHTML = 'Enter data first ';
  }
})

passwords.addEventListener('click', (e) => {
  if (e.target.classList.contains('copy')) {
    const passwordCell = e.target.parentNode.previousElementSibling;
    console.log("passwordCell:", passwordCell);
    const passwordText = passwordCell.textContent.trim();

    navigator.clipboard.writeText(passwordText)
      .then(() => {
        e.target.textContent = 'Copied';
      })
      .catch(() => {
        e.target.textContent = 'Failed';
      });
  }
});



function saveToLocalStorage() {
  const passwordData = passwords.innerHTML;
  localStorage.setItem('passwordData', passwordData);
}

window.addEventListener('load', () => {
  const storedData = localStorage.getItem('passwordData');
  if (storedData) {
    passwords.innerHTML = storedData;
  }
});


dlt.addEventListener('click', () => {
  localStorage.removeItem('passwordData');
  document.location.reload(true);
})











