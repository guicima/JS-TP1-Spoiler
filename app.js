/*let spoiler = document.querySelector('#spoiler');
let button = document.createElement("a");
let content = document.createTextNode('spoiler');

button.appendChild(content);
//spoiler.remove();
spoiler.parentElement.replaceChild(button, spoiler);
button.addEventListener('click', function () {
    button.parentElement.replaceChild(spoiler, button);
});

let spoilers = document.querySelectorAll('.spoiler');
for (let i = 0; i < spoilers.length; i++) {
    const spoiler = spoilers[i];
    let content = spoiler.innerHTML;
    spoiler.innerHTML = "spoiler";
    spoiler.classList.add('button-mode');
    spoiler.addEventListener('click', function () {
        spoiler.innerHTML = content;
        spoiler.classList.remove('button-mode');
    })
}*/

//Lets try something else

let button = document.querySelector('.button');
let spoilers = document.querySelectorAll('.spoiler');
let hidden = true;
button.addEventListener('click', function () {

    if (hidden) {

        for (let i = 0; i < spoilers.length; i++) {
            const spoiler = spoilers[i];
            spoiler.style.display = "inline-block";
            setTimeout(function () {
                spoiler.style.opacity = "1";
            }, 20)
        }
        button.innerHTML = 'Hide spoilers';
        hidden = false;

    } else {

        for (let i = 0; i < spoilers.length; i++) {
            const spoiler = spoilers[i];
            spoiler.style.opacity = "0";
            setTimeout(function () {
                spoiler.style.display = "none";
            }, 500)
        }
        button.innerHTML = 'Show spoilers';

        hidden = true;

    }


})