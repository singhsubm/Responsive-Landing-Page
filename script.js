const le = document.querySelector('.limited-edition');
function tiltElement() {
    le.style.transition = 'transform 0.5s ease-in';
    le.style.transform = 'rotate(20deg)';
}
function resetElement() {
    le.style.transform = 'rotate(0)';
}
le.addEventListener('mouseover',tiltElement);
le.addEventListener('mouseout',resetElement);


const img1 = document.querySelector('.part1-bot img')
function zoomElement() {
    img1.style.transition = 'transform 0.5s ease';
    img1.style.transform = 'scale(1.2)';
}
function unzoomElement() {
    img1.style.transform = 'scale(1)';
}
img1.addEventListener('mouseover',zoomElement);
img1.addEventListener('mouseout',unzoomElement);

const img3 = document.querySelector('#part3 .img3 img')
function zoom() {
    img3.style.transition = 'transform 0.5s ease';
    img3.style.transform = 'scale(1.2)';
}
function unzoom() {
    img3.style.transform = 'scale(1)';
}
img3.addEventListener('mouseover',zoom);
img3.addEventListener('mouseout',unzoom);