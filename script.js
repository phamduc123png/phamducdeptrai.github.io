function showPopupImg(imgSrc) {
  var img = document.getElementById('popup-img');
  img.src = imgSrc;
  img.style.display = 'block';
}
document.addEventListener('click', function(e) {
  var img = document.getElementById('popup-img');
  if (img.style.display === 'block' && !img.contains(e.target) && !e.target.closest('.card')) {
    img.style.display = 'none';
  }
});