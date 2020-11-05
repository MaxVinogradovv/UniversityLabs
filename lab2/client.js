$(document).ready(function(){
  getUsers();

  function updateUser(user) {
    $.ajax({
      url: '/updateuser',
      type: 'PUT',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(user),
      success: function(data) {
        getUsers();
      }
    }).done(function(data) {
      console.log( "done" );
      getUsers();
    }).fail(function(err) {
      console.log( "error",err );
      return  alert(err.responseJSON.message);
    }).always(function(data) {
      console.log( "complete" );
    });
  }

  function addUser(username, userage){
    if(!username||!userage) return;
    var obj={
      username,
      userage
    }
    $.ajax({
      url: '/adduser',
      type: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(obj),
      success: function(data) {
        getUsers();
      }
    }).done(function(data) {
      console.log( "done" );
    }).fail(function(err) {
      console.log( "error",err );
      return  alert(err.responseJSON.message);
    }).always(function(data) {
      console.log( "complete" );
    });
  }

  function getUsers() {
    $.get('/getusers', function (data) {
      createTable($('#table'), data)
    })
  }

  function updateUserButtonCLick(user) {
      $('.add').text('Update');
      $('.name').val(user.username);
      $('.age').val(user.userage);
      $('._id').val(user._id);
  }

  $('.add').click(function(){
    var username=$('.name').val();
    var userage=$('.age').val();
    var _id=$('._id').val();
    $('.name').val("");
    $('.age').val("");
    $('._id').val("");

    if( $('.add').text() === 'Update') {
      updateUser({
        _id,
        username,
        userage
      });
      $('.add').text('Add');
    } else {
      addUser(username,userage);
    }

  })


function createTable(element,mas) {
  $(element).empty();
  $('<table>')
    .addClass("table table-bordered table-primary col-6")
    .appendTo(element);

  $('<tr><th>Name</th><th>Age</th><th>Actions</th></tr>').addClass('th').appendTo('.table');


  for (var i = 0; i < mas.length; i++) {
    $('<tr>').addClass('tr').appendTo('.table');
    for (var key in mas[i]) {
      $(`<td id='${key}'>`).addClass('td')
        .appendTo('.tr:last').text(mas[i][key]);
    }

    $('.tr:last .td:first').hide();
    $('<td>').appendTo('.tr:last');

    $('<button>').text('Update').addClass('btn btn-primary grid-btn')
      .appendTo('td:last').click(function () {
      var _id = $(this).parent().parent().find('td:first').text();
      var username = $(this).parent().parent().find('#username').text();
      var userage = $(this).parent().parent().find('#userage').text();
      const obj = {
        _id,
        username,
        userage
      }
      updateUserButtonCLick(obj);
    });

    $('<button>').text('Delete').addClass('btn btn-danger grid-btn')
      .appendTo('td:last').click(function () {
      var id = $(this).parent().parent().find('td:first').text();
      console.log(id);
      deleteUser(id);
    });
  }
}

  function deleteUser(id){
    var obj={id:id};
    $.post('/deleteuser',obj,function(data){
      console.log(data);
      getUsers();
    })
  }

});

