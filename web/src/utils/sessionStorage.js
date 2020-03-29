function setStorage(id, name) {
  localStorage.setItem('ongId', id);
  localStorage.setItem('ongName', name);
}

function getStorage() {
  const OngId = localStorage.getItem('ongId');
  const OngName = localStorage.getItem('ongName');

  return {
    OngId,
    OngName,
  };
}

function clearStorage() {
  localStorage.clear();
}

export { setStorage, getStorage, clearStorage };
