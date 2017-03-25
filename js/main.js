var form = document.getElementById('form1');
form = addEventListener('submit', function (eventInfo) {
    eventInfo.preventDefault();
    console.log(form).getAttribute('value');
});
