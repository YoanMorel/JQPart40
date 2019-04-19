$(function() {
  var grades = $('input');
  var msng = $('span');

  $('button').click(function() {

    grades.each(function() {
      if (isNaN(Number($(this).val()))) {
        alert('Mets que des chiffres fils d\'input !');
        $(this).val('');
      }
    });

    var sumGrade = 0;
    gardes.each(function() {
      sumGrade += Number($(this).val());
    });
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
