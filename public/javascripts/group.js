$(function() {
  $("#tabs").tabs({
    fx: {}
    });

  $("input#bid_expiration_date").live('focus', function() {
    $(this).datepicker({
      buttonImage: "/images/calendar.gif",
      buttonImageOnly: true
      });
    });

  $.ajaxSetup({
    'beforeSend': function(xhr) {xhr.setRequestHeader("Accept", "text/javascript")}
    });

  $("#new_bid").live('submit',function(){
    $('span.wait').show();
    $.post($(this).attr('action'),$(this).serialize(),null,'script');
    return false;
  });

  $(".edit_bid").live('submit',function(){
    $('span.wait').show();
    $.post($(this).attr('action'),$(this).serialize(),null,'script');
    return false;
  });

  $('#new_topic').live('submit',function() {
    $.post($(this).attr('action'),$(this).serialize(),null,'script');
    return false;
    });

  $('#new_post').live('submit',function() {
    $.post($(this).attr('action'),$(this).serialize(),null,'script');
    return false;
    });

  $('.pagination a').live('click',function() {
    $('span.wait').show();
    $.getScript(this.href);
    return false;
    });

  $('.topic a.show-follow').live('click',function() {
    $('span.wait').show();
    $.getScript(this.href);
    return false;
    });

  $('a[href=#forum]').bind('click',function() {
    $('span.wait').show();
    $.getScript(document.location.href+'?tab=forum');
    $('#forum_form').html('');
    });

  $('a[href=#requests]').bind('click',function() {
    $('span.wait').show();
    $.getScript(document.location.href+'?tab=requests');
    });

  $('.req a.show-follow').live('click',function() {
    $('span.wait').show();
    $.getScript(this.href);
    return false;
    });
});