// nav toggle
const header = document.querySelector('.header');
const toggleBtn = document.querySelector('#toggle-btn');
const toggleIcon = document.querySelector('.toggle-bar');
const topBtn = document.querySelector('.top-btn');

toggleBtn.addEventListener('click', function () {
  toggleIcon.classList.toggle('toggle-active');
});

// scroll to top
topBtn.addEventListener('click', function () {
  scroll(0, 0);
});

document.addEventListener('scroll', function () {
  // back to top
  if (window.scrollY > window.innerHeight - 250) {
    topBtn.style.visibility = 'visible';
  } else {
    topBtn.style.visibility = 'hidden';
  }

  // nav fixed
  if (window.scrollY > 100) {
    header.classList.add('nav-fixed');
  } else {
    header.classList.remove('nav-fixed');
  }
});

// color service icon
colorList = ['#13C4A1', '#6610F2', '#FFB700', '#FC3549', '#00D280', '#FF612F'];
let itemList = document
  .querySelector('.service-item')
  .querySelectorAll('.item');
for (const [i, item] of itemList.entries()) {
  item.querySelector('.icon').style.backgroundColor = colorList[i];
}

// input field
// grid area in input fields
let inputField = document.querySelector('.input-container');
for (const item of inputField.children) {
  item.setAttribute('style', `grid-area: ${item.id};`);
}
