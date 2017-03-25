var forgood = document.getElementById('today');
forgood.addEventListener('click', function () {   //This listens for a click on the 'today is' paragraph.
    var newParagraph = document.createElement('p'); //Upon hearing the click, a new paragraph appears that
    newParagraph.innerHTML = '<p>for a good day</p>'; //completes the sentence with 'for a good day'
    document.getElementsByTagName('body')[0].appendChild(newParagraph);
});
