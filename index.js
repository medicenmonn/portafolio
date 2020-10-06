window.onload = () => {
    document.querySelector(".arrow-right").addEventListener("click", clickRight);
    document.querySelector(".arrow-left").addEventListener("click", clickLeft);
    document
      .querySelector(".send-button")
      .addEventListener("click", showNotification);
    document.querySelectorAll(".project").forEach(element => {
      element.addEventListener("click", (e) => openModal(e));
    });
    document.body.addEventListener('click', (e) => closeModal(e))
    document.body.addEventListener('keyup', e => listenForEsc(e))
  };
  
  function clickRight() {
    const currentLeft = parseInt(
      getComputedStyle(document.querySelector(".project-container")).left,
      10
    );
    if (currentLeft < -166) {
      return;
    }
    let newValue = currentLeft - 166;
    document.querySelector(".project-container").style.left = `${newValue}px`;
  }
  
  function clickLeft() {
    const currentLeft = parseInt(
      getComputedStyle(document.querySelector(".project-container")).left,
      10
    );
    if (currentLeft === 0) {
      return;
    }
    let newValue = currentLeft + 166;
    document.querySelector(".project-container").style.left = `${newValue}px`;
  }
  
  function showNotification() {
    document.querySelector(".notification").style.display = "flex";
    setTimeout(function() {
      document.querySelector(".notification").style.display = "none";
    }, 3000);
  }
  
  function openModal(e) {
      document
      .querySelector(".modal-container").style.display = "flex";
  }
  
  function closeModal(e) {
      if (e.target.className.includes("project") || e.target.className === "modal") {
          return
      } else {
          document.querySelector(".modal-container").style.display = "none";
      }
  }window.onload = () => {
  document.querySelector(".arrow-right").addEventListener("click", clickRight);
  document.querySelector(".arrow-left").addEventListener("click", clickLeft);
  document
    .querySelector(".send-button")
    .addEventListener("click", e => validateForm(e));
  document.querySelectorAll(".project").forEach(element => {
    element.addEventListener("click", (e) => openModal(e));
  });
  document.body.addEventListener('click', (e) => closeModal(e))
};

function clickRight() {
  const currentLeft = parseInt(
    getComputedStyle(document.querySelector(".project-container")).left,
    10
  );
  if (currentLeft < -166) {
    return;
  }
  let newValue = currentLeft - 166;
  document.querySelector(".project-container").style.left = `${newValue}px`;
}

function clickLeft() {
  const currentLeft = parseInt(
    getComputedStyle(document.querySelector(".project-container")).left,
    10
  );
  if (currentLeft === 0) {
    return;
  }
  let newValue = currentLeft + 166;
  document.querySelector(".project-container").style.left = `${newValue}px`;
}

/** validar el formulario antes de mostrar la notif */
function validateForm(e) {
    e.preventDefault()
    const nameField = document.getElementById('name')
    if (nameField.value === ''){
        document.getElementById('name-error').innerHTML = '! Para enviar el formulario, senecesita un nombre'
    } else {
        showNotification()
    }
}
/** Esta funcion se llama cuando la persona hace click en e boton de enviar formulario */
function showNotification() {
  document.getElementById('name-error').innerHTML = '';
  document.querySelector('form-container').request();
  document.querySelector(".notification").style.display = "flex";
  document.querySelector('.notification').innerHTML = 'El formulario fue enviado sin errores';
  setTimeout(function() {
    document.querySelector(".notification").style.display = "none";
  }, 3000);
}

/** escucha por la clave esc para cerrar el modal  */
function listenForEscape(e) {
    if (e.keycode === 27) {
        closeModal(e)
    }
}

/** Esta funcion se llama cuando la persona hace click en cualquier proyecto del carrusel */
function openModal(e) {
    document.querySelector(".modal-container").style.display = "flex";
    document.getElementById("modal-header").focus();
}

function closeModal(e) {
    if (e.target.className.includes("project") || e.target.className === "modal") {
        return
    } else {
        document.querySelector(".modal-container").style.display = "none";
    }
}