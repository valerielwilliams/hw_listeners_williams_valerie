var heading = document.getElementById('mainHeading');
var a = 0;

heading.addEventListener('click', function () {
    var newParagraph = document.createElement('p');
    newParagraph.innerHTML = '<p>This is click number:</p>' + (++a);
    document.getElementsByTagName('body')[0].appendChild(newParagraph);
});
