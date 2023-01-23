
const closeModal = document.getElementsByClassName('closeModal');
const fade = document.getElementById('#fade');
const modal = document.getElementById('#modal');

function openModalBtn() {
  const openModal = document.getElementsByClassName('openModal');
  if (typeof openModal[0] == 'undefined' || openModal[0] === null)
    return;

  openModal[0].style.display = "Block";
  document.body.style.overflow = "hidden";
}


function closeModalBtn() {
  const closeModal = document.getElementsByClassName('closeModal');
  if (typeof closeModal[0] == 'undefined' || closeModal[0] === null)
    return;

  closeModal[0].style.display = "none";
  document.body.style.overflow = "auto";
}