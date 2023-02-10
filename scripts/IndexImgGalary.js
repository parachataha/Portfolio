let fullImg = document.querySelector('#fullImg');
let img = document.querySelector('#fullImg img');

function openFullImg(pic) {
    img.src = pic;
    fullImg.style.display = 'flex';
}
function openLink(link) {
    window.open = link, "_blank";
}

function closeFullImg() {
    fullImg.style.display = 'none';
}

fullImg.addEventListener('click', closeFullImg())