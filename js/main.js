var form = document.getElementById('form1');
var userFirstName = document.getElementById('firstName');
var userLastName = document.getElementById('lastName');
var userEmail = document.getElementById('email');
var userMessage = document.getElementById('message');

form.addEventListener('submit', function (eventInfo) {
    eventInfo.preventDefault();
    console.log('The firstName is:', userFirstName.value);
    console.log('The lastName is:', userLastName.value);
    console.log('The email is:', userEmail.value);
    console.log('The message is:', userMessage.value);
});
