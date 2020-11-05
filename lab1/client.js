$(document).ready(function(){
  function getUsers() {
    $.get('/getusers', function (data) {
      console.log(data)
      createTable($('#table'), data)
    })
  }
  getUsers();
});

const createTable = (container, mas) => {
  mas = JSON.parse(mas)

  let thElement = '<tr>';
  for(let item of Object.keys(mas[0])){
    thElement += `<th>${item}</th>`;
  }
  thElement += '</tr>';

  let tdElement = '';
  for(let item of mas) {
    tdElement += '<tr>'
    for(let objItem of Object.values(item)) {
      tdElement += `<td>${objItem}</td>`;
    }
    tdElement += '</tr>';
  }

  container.append(thElement + tdElement);
}
