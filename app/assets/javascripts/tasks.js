// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function(){

  $('#new_task').submit(function(x){
    x.preventDeafualt()
    var form_data = $('#new_task').serialize();
    var form_action = $('#new_task').attr('action');

    $.post(form_action, form_data, function(html_data, status_text){
      // console.log(aguments);
      $('tbody').append(html_data);
      $('#task_name').val('');

    });

  // $('#new_task').on('ajax:success', function(event, html_data, status_text){
    // alert('new todo added!');
    // window.location.reload();
  });
});
