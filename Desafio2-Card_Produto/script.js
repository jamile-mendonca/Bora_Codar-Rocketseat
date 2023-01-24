function openModalBtn(modalName) {
  const modal = document.getElementById('modal');
  if (typeof modal == 'undefined' || modal === null)
    return;

  modal.style.display = "Block";
  document.body.style.overflow = "hidden";

}


function closeModalBtn(modalName) {
  const modal = document.getElementById('modal');
  if (typeof modal == 'undefined' || modal === null)
    return;

  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

function addCart() {
  const cart = document.getElementsByClassName('cart');
  alert('Item adicionado com sucesso!')
}