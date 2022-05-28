
// create the new element div 
let divElement = document.createElement('div');

// add text to created element
let val = localStorage.getItem('text');
let text;
if(val == null) {
    text = document.createTextNode('Editable Element Plz Click To Edit It');
}else {
    text = document.createTextNode(val);
}
divElement.appendChild(text);

// give id style and class to div 
divElement.setAttribute('id','element');
divElement.setAttribute('class', 'element')
divElement.setAttribute('style', 'border:2px solid black; width: 20%; margin: 5px auto; padding: 4px 8px;');

// Grab the main container and div element of id first
let container = document.querySelector('.container');
let first = document.getElementById('first');

// insert the new element before first in container
container.insertBefore(divElement, first);

// add event listener to div element

divElement.addEventListener('click', function() {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas == 0){
    let html = element.innerHTML;
    divElement.innerHTML = `<textarea class="textarea form-control" id="textarea" rows="3">${html}</textarea>`;
    }
    //listen for the blur event
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function() {
        element.innerHTML = textarea.value;
        localStorage.setItem('text',textarea.value);
    })
});


