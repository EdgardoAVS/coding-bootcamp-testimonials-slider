const slider = document.querySelector('#slider');
let reviewContainer = document.querySelectorAll('.review');
let reviewContainerLast = reviewContainer[reviewContainer.length - 1];

const buttonPreview = document.querySelectorAll('#button-preview');
const buttonNext = document.querySelectorAll('#button-next');

slider.insertAdjacentElement('afterbegin', reviewContainerLast);

function Next (event) {
  let reviewContainerFirst = document.querySelectorAll('.review')[0];
  slider.style.marginLeft = '-100%';
  event.preventDefault();
  setTimeout(function () {
    slider.insertAdjacentElement('beforeend', reviewContainerFirst);
    slider.style.marginLeft = '0%';
 
  }, 300);
  
};

function Preview (event) {
  let reviewContainerFirst = document.querySelectorAll('.review')[0];
  slider.style.marginLeft = '-100%';
  event.preventDefault();
  setTimeout(function () {
    slider.insertAdjacentElement('beforeend', reviewContainerFirst);
    slider.style.marginLeft = '0%';
  }, 300);

}

for(let i = 0; i < buttonNext.length; i++) {
  buttonNext[i].addEventListener('click', Next);
  
}
for(let i = 0; i < buttonPreview.length; i++) {
  buttonPreview[i].addEventListener('click', Preview);
}
