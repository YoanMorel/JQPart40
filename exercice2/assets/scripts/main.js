$(function() {
  var grade1 = $('#grade1');
  var grade2 = $('#grade2');
  var grade3 = $('#grade3');
  var grade4 = $('#grade4');
  var grade5 = $('#grade5');
  var msng = $('span');

  $('button').click(function() {

    $('input').each(function() {
      if (isNaN(parseFloat($(this).val()))) {
        alert('Mets que des chiffres fils d\'input !');
        $(this).val('');
      }
    });

    var sumGrade = parseFloat(grade1.val()) + parseFloat(grade2.val()) + parseFloat(grade3.val()) + parseFloat(grade4.val()) + parseFloat(grade5.val());
    var avrg = sumGrade / 5;

    if (avrg >= 0 && avrg < 10) {
      msng.text(avrg + ' : Mais non tu n\'es pas bête. Juste un peu différent.');
    } else if (avrg >= 10 && avrg < 13) {
      msng.text(avrg + ' : Peut mieux faire.');
    } else if (avrg >= 13 && avrg < 16) {
      msng.text(avrg + ' : Continuez les efforts !');
    } else if (avrg >= 16 && avrg < 20) {
      msng.text(avrg + ' : T\'aurais pu mieux faire quand même');
    } else if (avrg > 20) {
      msng.text('Ouais mais non');
    } else {
      msng.text(avrg + ' : Ça va les chevilles ?');
    }
  });
});
