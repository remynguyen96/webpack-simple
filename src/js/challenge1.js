/**
 * @Description: Challenge 1
 */
import '../css/challenge1.scss';
let links = document.querySelectorAll('.link-bar');
links.forEach((link) => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let parent = link.parentNode;
        parent.classList.contains('active') ? parent.classList.remove('active') : parent.classList.add('active');
   }, false);
});
let circle = document.querySelector('.box');
let containerCircle = document.querySelector('.container-box');
circle.onclick = function() {
    let classContainer = containerCircle.classList;
    classContainer.contains('open')  ? classContainer.remove('open') : classContainer.add('open');
}