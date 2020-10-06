function createMeme() {
    // ...
}

function showMeme() {
    // ...
}

function createRemoveButton() {
    // ...
}

function submitMeme() {
    // ...
}

window.onload = function () {
    let form = document.getElementById('meme-creator');

    form.addEventListener('clicl', function (event) {
        submitMeme();
    });
};