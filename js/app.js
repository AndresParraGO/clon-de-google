

let btnApps = document.getElementById('btnApps'),
    btnUser = document.getElementById('btnUser'),
    windowUser = document.getElementById('windowUser'),
    windowApps = document.getElementById('windowApps'),
    inputSearch = document.getElementById('search');


// Show Window User
function showWindowUser() {
  if(windowUser){
    windowApps.classList.remove('show-window');  
    windowUser.classList.toggle('show-window');
  }
}


// Show Window Apss
function showWindowApps() {
  if(windowApps){
    windowUser.classList.remove('show-window');
    windowApps.classList.toggle('show-window');
  }
}



// Obtiene la informacion del input
function getInfoSearch() {
  let info = inputSearch.value
  search(info);
}

// Cambia la URL por la busqueda del usuario
function search(info) {
  window.location.href = `https://www.google.com/search?q=${info}`
}




btnUser.addEventListener('click', () => showWindowUser());
btnApps.addEventListener('click', () => showWindowApps());

inputSearch.addEventListener('keyup', (e) => {
  if(e.code === 'Enter'){
    getInfoSearch();
  }
});


