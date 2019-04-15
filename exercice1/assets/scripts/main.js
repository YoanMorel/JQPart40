var terminator = ['Pierre', 'Feuille', 'Ciseaux'];
var randomNumber = 0;

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

$('#button').click(function() {
  randomNumber = getRandomNumber(3);
  var userChoice = $('option:selected').val();

  if (userChoice == terminator[randomNumber]) {
    $('#messenger').text(userChoice + ' VS ' + terminator[randomNumber] + '\n SHIPS ! DO IT AGAIN !');
  } else if ((userChoice == 'Pierre' && terminator[randomNumber] == 'Ciseaux') || (userChoice == 'Feuille' && terminator[randomNumber] == 'Pierre') || (userChoice == 'Ciseaux' && terminator[randomNumber] == 'Feuille')) {
    $('#messenger').text(userChoice + ' VS ' + terminator[randomNumber] + '\nUSER WIN !');
  } else {
    $('#messenger').text(userChoice + ' VS ' + terminator[randomNumber] + '\nTERMINATOR WIN !');
  }
})
