$(document).ready(function() {
  var data_object = {}
  $('#sortable').sortable({
    axis: "y",
    update: function(){
      $('ul').children().each(function(i){
        $(this).attr('id',i+1);
        data_object[$(this).text()] = $(this).attr('id');
      });
      $.ajax({
        type: 'post',
        url: '/',
        data: data_object
      });
    }
  });
  $('#sortable').disableSelection();
});
