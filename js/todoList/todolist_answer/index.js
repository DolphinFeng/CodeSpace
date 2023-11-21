// var todoItem = [];

function makeList() {
  var list = document.getElementById('list-input').value;
  if (list.length > 0) {
    var createList = document.getElementById('list');
    var todolist = `
      <li class="todolist">
        <input type="checkbox">
        <span>${list}</span>
      </li>
    `;
    createList.insertAdjacentHTML('afterbegin',todolist);
    document.getElementById('list-input').value = "";
  }  
}
document.getElementById('list-input').onkeyup = function(e) {
  if (e.keyCode === 13) {
     makeList();
  }
}; 