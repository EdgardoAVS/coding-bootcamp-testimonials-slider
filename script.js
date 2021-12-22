const slider = document.querySelector('#slider');
let reviewContainer = document.querySelectorAll('.review');
let reviewContainerLast = reviewContainer[reviewContainer.length - 1];

const buttonPreview = document.querySelector('#button-preview');
const buttonNext = document.querySelector('#button-next');

slider.insertAdjacentElement('beforeend', reviewContainerLast);

function Next() {
  let reviewContainerFirst = document.querySelectorAll('.review')[0];
  slider.style.marginLeft = '-100%';
  // slider.style.transition = 'all 0.3s';
  setTimeout(function () {
    slider.transition = 'none';
    slider.insertAdjacentElement('beforeend', reviewContainerFirst);
    slider.style.marginLeft = '0%';
  }, 300);
};

buttonNext.addEventListener('click', Next);