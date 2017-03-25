var forgood = document.getElementById('today');
forgood.addEventListener('click', function () {   //This listens for a click on the 'today is' paragraph.
    var newParagraph = document.createElement('p'); //Upon hearing the click, a new paragraph appears that
    newParagraph.innerHTML = '<p>for a good day</p>'; //completes the sentence with 'for a good day'
    document.getElementsByTagName('body')[0].appendChild(newParagraph);
});

var goodday = document.getElementById('good'); //This listens for a mouse hover over 'a good day' paragraph.
goodday.addEventListener('mouseover', function (event) { //Upon hearing the hover, the paragraph turns blue.
    event.target.style.color = '#2981b5';
});

var magnolia = document.getElementById('header'); //This listens for a double-click on the h1.
magnolia.addEventListener('dblclick', function (event) { //Upon hearing the double-click, the font-size
    event.target.style.fontSize = '50px';                //increases to 50px.
});
