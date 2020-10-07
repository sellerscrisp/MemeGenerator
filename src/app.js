// Get values from DOM and assign classes
function createMeme(memeImg, topText, bottomText, imgUrl) {
    topText.innerText = document.getElementById('top-text').value;
    topText.setAttribute('class', 'top');
    memeImg.setAttribute('src', imgUrl);
    bottomText.innerText = document.getElementById('bottom-text').value;
    bottomText.setAttribute('class', 'bottom');
}

// Display meme from values
function showMeme(memeFigure, memeImg, topText, bottomText) {
    memeFigure.appendChild(topText);
    memeFigure.appendChild(memeImg);
    memeFigure.appendChild(bottomText);
    memeFigure.setAttribute('class', 'new-meme');
}

// Set up remove function to be called in submitMeme()
function createRemoveButton(removeBtn, icon) {
    removeBtn.setAttribute('class', 'remove');
    icon.setAttribute('class', 'far fa-window-close');
    removeBtn.appendChild(icon);
}

// Load meme elements on submit button click/displays meme in meme-wrapper
function submitMeme(event, form) {
    event.preventDefault();

    let memeWrapper = document.getElementById('meme-wrapper');
    let memeDiv = document.createElement('div');
    let memeFigure = document.createElement('figure');

    let icon = document.createElement('a');
    let removeBtn = document.createElement('a');

    let topText = document.createElement('figcaption');
    let bottomText = document.createElement('figcaption');

    let memeImg = document.createElement('img');
    let imgUrl = document.getElementById('img-url').value;

    createRemoveButton(removeBtn, icon);
    createMeme(memeImg, topText, bottomText, imgUrl);
    showMeme(memeFigure, memeImg, topText, bottomText);

    memeDiv.setAttribute('class', 'meme-div');
    memeDiv.appendChild(removeBtn);
    memeDiv.appendChild(memeFigure);

    memeWrapper.appendChild(memeDiv);

    memeWrapper.addEventListener('click', function (event) {
        if (event.path[2].className === 'remove') {
            event.path[2].parentNode.remove();
        }
    });

    // let activeElement = document.getElementById('submit-button');

    form.reset();
    // resetElement(activeElement);
}

window.onload = function () {
    let form = document.getElementById('meme-creator');

    form.addEventListener('submit', function (event) {
        submitMeme(event, form);
    });
};

//! ? reset the 'memeify' button because it (maybe) interferes with the remove button functionality
// function resetButton(event) {
//   let $event = $(event);
//   let $original = $event.clone();

//   $event.replaceWith($original);
// }

// window.onblur = function () {
//   let activeElement = document.querySelector('button');
//   activeElement.blur();
// }