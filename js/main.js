var heading = document.getElementsByTagName('h1');

heading.addEventListener('click', function () {
    var newParagraph = document.createElement('p');
    newParagraph.innerHTML = '<p>This is click number x</p>';
    document.getElementsByTagName('body')[0].appendChild(newParagraph);
});
