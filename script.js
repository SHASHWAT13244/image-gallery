// Open the full image modal
function openfullImg(src, index) {
  const fullImgBox = document.getElementById('fullImgBox');
  const fullImg = document.getElementById('fullImg');
  const slideContainer = document.querySelector('.slide-container');

  fullImg.src = src;
  fullImgBox.style.display = 'flex';
  fullImgBox.classList.add('show');
  fullImgBox.dataset.index = index;
  
  slideContainer.style.transform = 'translateX(0)';
}

// Close the full image modal
function closefullImg() {
  const fullImgBox = document.getElementById('fullImgBox');
  fullImgBox.classList.remove('show');
  setTimeout(() => {
    fullImgBox.style.display = 'none';
  }, 300);
}

// Change to the next or previous image
function changeImage(direction) {
  const fullImgBox = document.getElementById('fullImgBox');
  let index = parseInt(fullImgBox.dataset.index);
  const images = document.querySelectorAll('.img-gallery img');
  
  // Update index based on direction
  index += direction;
  
  // Loop back to the beginning or end of the images
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;
  
  const newSrc = images[index].src;
  openfullImg(newSrc, index);
}

// Toggle between light and dark mode
document.getElementById('toggleThemeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const themeBtn = document.getElementById('toggleThemeBtn');
  themeBtn.textContent = document.body.classList.contains('dark-theme') ? '🌞' : '🌙';
});

// Preloader functionality
window.onload = () => {
  document.body.classList.remove('loading');
}
