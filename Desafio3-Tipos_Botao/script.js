function changeColor(name) {


  const btn = document.getElementsByClassName(name);

  if (btn[0]) {

    switch (name) {
      case 'btn-int-1':
        btn[0].style.backgroundColor = "#64436b";
        break;
      case 'btn-int-2':
        btn[0].style.backgroundColor = "#64436b";
        btn[0].style.cursor = "not-allowed";
        break;
      case 'btn-int-3':
        btn[0].style.backgroundColor = "#64436b";
        btn[0].style.cursor = "move";
        break;
    }
  }
}

function backBtn(name) {
  const btn = document.getElementsByClassName(name);
  if (btn[0]) {

    switch (name) {
      case 'btn-int-1':
        btn[0].style.backgroundColor = "#8257E5";
        break;
      case 'btn-int-2':
        btn[0].style.backgroundColor = "#3C3748";
        break;
      case 'btn-int-3':
        btn[0].style.backgroundColor = "#130F1E";
        break;
    }
  }
}
