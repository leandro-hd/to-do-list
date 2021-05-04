function createTask() {
  let username = document.getElementById('username').value;
  let activity = document.getElementById('activity').value;

  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      activity: [`${activity}`]
    })
  }).then((response) => {
    if (!response.ok) {
      let ul = document.getElementById('list');

      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }

      let item = ul.appendChild(document.createElement('li'));

      item.innerHTML = `<strong>Erro ao salvar os dados. Por favor, tente novamente!</strong>`;

      item.setAttribute('class', 'list-group-item text-white bg-dark');

      throw new Error(response.status + '. Erro ao salvar os dados!');
    } else {
      location.href = '/';
    }
  })
}

function findByUsername() {
  let username = document.getElementById('username').value;
  let tasks = false;

  fetch(`/${username}`).then(function(response) {
    if (response.status === 200) {
      tasks = true;
    }
    return response.json();
  }).then(function(data) {
    if ( tasks === true) {
      let ul = document.getElementById('list');

      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }

      for (let count in data) {
        let item = ul.appendChild(document.createElement('li'));

        let select = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-square mb-1 mr-3" viewBox="0 0 16 16" onclick="select(${count})" id="select${count}">
          <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
          <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
        </svg>`;

        let replace = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill float-right mt-1" viewBox="0 0 16 16" onclick="replaceActivity(${count})" id="replace${count}">
          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
        </svg>`;

        let remove = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill float-right mt-1 ml-3" viewBox="0 0 16 16" onclick="removeActivity(${count})" id="remove${count}">
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg>`

        item.innerHTML = select + data[count] + remove + replace;

        item.setAttribute('class', 'list-group-item text-white bg-dark text-justify');
      }
    } else {
      let ul = document.getElementById('list');

      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }

      let item = ul.appendChild(document.createElement('li'));

      item.innerHTML = `<strong>Usuário não encontrado!</strong>`;

      item.setAttribute('class', 'list-group-item text-white bg-dark');
    }
  })
}

function replaceActivity(count) {
  let username = document.getElementById('username').value;
  let activity = document.getElementById('activity').value;

  let parameter = (document.getElementById(`replace${count}`).parentNode.textContent).toLowerCase().trim();

  fetch(`/replace/${username}/${parameter}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      activity: `${activity}`
    })
  }).then((response) => {
    if (!response.ok) {
      let ul = document.getElementById('list');

      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }

      let item = ul.appendChild(document.createElement('li'));

      item.innerHTML = `<strong>Erro ao atualizar os dados. Por favor, tente novamente!</strong>`;

      item.setAttribute('class', 'list-group-item text-white bg-dark');

      throw new Error(response.status + '. Erro ao atualizar os dados!');
    } else {
      location.href = '/';
    }
  })
}

function updateActivity() {
  let username = document.getElementById('username').value;
  let activity = document.getElementById('activity').value;

  fetch(`/update/${username}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      activity: `${activity}`
    })
  }).then((response) => {
    if (!response.ok) {
      let ul = document.getElementById('list');

      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }

      let item = ul.appendChild(document.createElement('li'));

      item.innerHTML = `<strong>Erro ao atualizar os dados. Por favor, tente novamente!</strong>`;

      item.setAttribute('class', 'list-group-item text-white bg-dark');

      throw new Error(response.status + '. Erro ao atualizar os dados!');
    } else {
      location.href = '/';
    }
  })
}

function removeActivity(count) {
  let username = document.getElementById('username').value;
  let parameter = (document.getElementById(`remove${count}`).parentNode.textContent).toLowerCase().trim();

  fetch(`/remove/${username}/${parameter}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      activity: `${activity}`
    })
  }).then((response) => {
    if (!response.ok) {
      let ul = document.getElementById('list');

      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }

      let item = ul.appendChild(document.createElement('li'));

      item.innerHTML = `<strong>Erro ao atualizar os dados. Por favor, tente novamente!</strong>`;

      item.setAttribute('class', 'list-group-item text-white bg-dark');

      throw new Error(response.status + '. Erro ao atualizar os dados!');
    } else {
      location.href = '/';
    }
  })
}

function deleteActivity() {
  let username = document.getElementById('username').value;

  fetch(`/delete/${username}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      activity: `${activity}`
    })
  }).then((response) => {
    if (!response.ok) {
      let ul = document.getElementById('list');

      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }

      let item = ul.appendChild(document.createElement('li'));

      item.innerHTML = `<strong>Erro ao atualizar os dados. Por favor, tente novamente!</strong>`;

      item.setAttribute('class', 'list-group-item text-white bg-dark');

      throw new Error(response.status + '. Erro ao atualizar os dados!');
    } else {
      location.href = '/';
    }
  })
}

function select(count) {
  let classes = document.getElementById(`select${count}`).parentNode.className;
  let element = document.getElementById(`select${count}`).parentNode;
  let li = document.getElementById(`select${count}`).parentNode.textContent.trim();

  let text = (document.getElementById(`select${count}`).parentNode.textContent).trim();
  if (classes.indexOf('active') !== -1){
    element.innerHTML -= li;

    li = li.replace(`<del>${text}</del>`, text);

    element.innerHTML = li;
    element.setAttribute('class', 'list-group-item text-white bg-dark');
  } else {
    element.innerHTML -= li;

    li = li.replace(`${text}`, `<del>${text}</del>`);

    element.innerHTML = li;
    element.setAttribute('class', 'list-group-item text-white bg-dark active');
  }
}