$(function() {
  var regexTab = [/^[a-zA-Zéèêàçôöï\- ]*$/, /^[a-zA-Zéèêàçôöï\- ]*$/, /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/, /^[a-zA-Zéèêàçôöï\- ]*$/, /^[a-zA-Zéèêàçôöï\- ]*$/, /^[a-zA-Zéèêàçôöï\- ]*$/];
  var msng = $('span');


  $('input').focus(function() {
    if ($(this).val() == 'Non renseigné !') {
      $(this).css({border: ''}).val('');
    }
  });

  $('button').click(function() {
    var checkNbr = 0;
    $('input').each(function(index) {
      if (!$(this).val()) {
        $(this).css({border: '2px solid red'}).val('Non renseigné !');
      } else if ($(this).val() && !regexTab[index].test($(this).val())) {
        $(this).css({border: '2px solid red'}).val('Format de ' + $(this).attr('name') + ' incorrect').click(function() {
          $(this).val('');
        });
      } else {
        checkNbr++;
        $(this).css({border: '2px solid green'});
      }
    });
    if (checkNbr == $('input').length)
    msng.text($('#name').val() + ' ' + $('#firstName').val() + ', né le ' + $('#bDay').val() + ' à ' + $('#bPlace').val() + ', actuellement ' + $('#job').val() + ' à ' + $('#companyName').val());
  });
});
